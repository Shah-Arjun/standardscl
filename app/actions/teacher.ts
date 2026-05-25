"use server"

import { db } from "@/database/db"
import { teachersTable } from "@/database/schema"
import { asc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { uploadToCloudinary } from "@/lib/cloudinary"
import path from "path"
import type { Teacher } from "@/lib/types/teacher"

// ─── Get All Teachers ─────────────────────────────────────────────────────────
export async function getAllTeachers(): Promise<{
  success: boolean
  message: string
  data: Teacher[]
}> {
  try {
    const teachers = await db
      .select()
      .from(teachersTable)
      .orderBy(asc(teachersTable.id))

    return {
      success: true,
      message: "Teachers fetched successfully",
      data: teachers as Teacher[],
    }
  } catch (error: any) {
    console.error("getAllTeachers error:", error)
    return {
      success: false,
      message: error.message || "Failed to fetch teachers",
      data: [],
    }
  }
}

// ─── Get Single Teacher by ID ─────────────────────────────────────────────────
export async function getTeacherById(id: number): Promise<{
  success: boolean
  message: string
  data: Teacher | null
}> {
  try {
    if (!id || isNaN(id)) {
      return { success: false, message: "Invalid teacher ID", data: null }
    }

    const result = await db
      .select()
      .from(teachersTable)
      .where(eq(teachersTable.id, id))
      .limit(1)

    if (result.length === 0) {
      return { success: false, message: "Teacher not found", data: null }
    }

    return {
      success: true,
      message: "Teacher fetched successfully",
      data: result[0] as Teacher,
    }
  } catch (error: any) {
    console.error("getTeacherById error:", error)
    return {
      success: false,
      message: error.message || "Failed to fetch teacher",
      data: null,
    }
  }
}

// ─── Add Teacher ──────────────────────────────────────────────────────────────
export async function addTeacher(formData: FormData): Promise<{
  success: boolean
  message: string
  data?: Teacher
}> {
  try {
    // ─── Extract string fields ─────────────────────────────────────
    const teacherName = formData.get("teacherName")?.toString().trim() ?? ""
    const email = formData.get("email")?.toString().trim() ?? ""
    const rawGender = formData.get("gender")?.toString().trim() ?? "male"
    const genderValue: "male" | "female" | "other" = ["male", "female", "other"].includes(rawGender)
      ? (rawGender as "male" | "female" | "other")
      : "male"
    const phone = formData.get("phone")?.toString().trim() ?? ""
    const address = formData.get("address")?.toString().trim() ?? ""
    const employmentType = formData.get("employmentType")?.toString().trim() ?? ""
    const experience = Number(formData.get("experience"))

    if (isNaN(experience) || experience < 0) {
      return { success: false, message: "Experience must be a positive number" }
    }

    // ─── Parse array fields ────────────────────────────────────────
    const parseJSONField = (field: FormDataEntryValue | null): string[] => {
      if (!field) return []
      try { return JSON.parse(field.toString()) } catch { return [] }
    }

    const qualifications = parseJSONField(formData.get("qualifications"))
    const subjectsTeaches = parseJSONField(formData.get("subjectsTeaches"))
    const post = parseJSONField(formData.get("post"))

    // ─── Validate required text fields ────────────────────────────
    const missingFields: string[] = []
    if (!teacherName) missingFields.push("Teacher Name")
    if (!phone) missingFields.push("Phone Number")
    if (!address) missingFields.push("Address")
    if (!employmentType) missingFields.push("Employment Type")
    if (!experience) missingFields.push("Experience")
    if (qualifications.length === 0) missingFields.push("Qualifications")

    if (missingFields.length > 0) {
      return {
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      }
    }

    // ─── File validation ───────────────────────────────────────────
    const file = formData.get("photo") as File | null

    if (!file || !(file instanceof File) || file.size === 0) {
      return { success: false, message: "Valid photo is required" }
    }

    if (file.size > 50 * 1024 * 1024) {
      return { success: false, message: "Photo must be less than 50MB" }
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"]
    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: "Only JPG, JPEG, PNG allowed" }
    }

    // ─── Upload to Cloudinary ──────────────────────────────────────
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let cloudResult
    try {
      cloudResult = await uploadToCloudinary(buffer, "teachers")
    } catch (err) {
      console.error("Cloudinary upload failed:", err)
      return { success: false, message: "Failed to upload photo" }
    }

    // ─── Insert into DB ────────────────────────────────────────────
    const inserted = await db
      .insert(teachersTable)
      .values({
        teacherName,
        gender: genderValue,
        email,
        phone,
        address,
        employmentType,
        experience,
        qualifications,
        subjectsTeaches,
        post,
        photo: cloudResult.secure_url,
        photoPublicId: cloudResult.public_id,
      })
      .returning()

    revalidatePath("/admin/teachers")
    revalidatePath("/teachers")

    return {
      success: true,
      message: "Teacher added successfully",
      data: inserted[0] as Teacher,
    }
  } catch (error: any) {
    console.error("addTeacher error:", error)
    return { success: false, message: error.message || "Failed to add teacher" }
  }
}

// ─── Delete Teacher ───────────────────────────────────────────────────────────
export async function deleteTeacher(id: number): Promise<{
  success: boolean
  message: string
}> {
  try {
    if (!id || isNaN(id)) {
      return { success: false, message: "Invalid teacher ID" }
    }

    await db.delete(teachersTable).where(eq(teachersTable.id, id))

    revalidatePath("/admin/teachers")
    revalidatePath("/teachers")

    return { success: true, message: "Teacher deleted successfully" }
  } catch (error: any) {
    console.error("deleteTeacher error:", error)
    return { success: false, message: error.message || "Failed to delete teacher" }
  }
}
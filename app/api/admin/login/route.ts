import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { db } from "@/database/db"
import { userTable } from "@/database/schema"
import { eq } from "drizzle-orm"
import { signToken } from "@/lib/auth"
export async function POST(req: Request) {
    try {
      const { email, password } = await req.json()
  
      if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
      }
  
      const result = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email))
  
      const user = result[0]
  
      // unified error
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 401 })
      }
  
      const isValid = await bcrypt.compare(password, user.password)
  
      if (!isValid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
      }
  
      const token = await signToken({
        email: user.email,
        role: user.role,
      })
  
      const res = NextResponse.json({ success: true })
  
      res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60,
      })
  
      return res
    } catch {
      return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
  }
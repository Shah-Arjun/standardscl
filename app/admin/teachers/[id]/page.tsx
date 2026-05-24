"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getTeacherById } from "@/app/actions/teacher";
import type { Teacher } from "@/lib/types/teacher";

// ─── Skeleton ──────────────────────────────────────────────────────────────────
function TeacherDetailSkeleton() {
  return (
    <div className="p-6 max-w-2xl mx-auto animate-pulse">
      <div className="bg-white shadow rounded-xl p-6 space-y-5">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-200" />
        </div>
        <div className="h-6 bg-gray-200 rounded w-48 mx-auto" />
        <div className="space-y-3 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-3/4" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeacherDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchTeacher = async () => {
      try {
        setLoading(true);
        const res = await getTeacherById(Number(id));
        setTeacher(res.success ? res.data : null);
      } catch (err) {
        console.error(err);
        setTeacher(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);

  if (loading) return <TeacherDetailSkeleton />;

  if (!teacher) return <p className="p-6 text-red-500">Teacher not found</p>;

  return (
    <>
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="mb-4 ml-6 mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>

      <div className="p-6 max-w-2xl mx-auto">
        {/* Card */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={teacher.photo || "/default-avatar.png"}
              alt={teacher.teacherName}
              className="w-32 h-32 rounded-full object-cover border"
              width={128}
              height={128}
            />
          </div>

          {/* Info */}
          <h1 className="text-2xl font-bold text-center">{teacher.teacherName}</h1>

          <p><b>ID:</b> SSBS {teacher.id}</p>
          <p><b>Email:</b> {teacher.email || "—"}</p>
          <p><b>Phone:</b> {teacher.phone || "—"}</p>
          <p><b>Experience:</b> {teacher.experience ? `${teacher.experience} years` : "—"}</p>
          <p>
            <b>Qualifications:</b>{" "}
            {Array.isArray(teacher.qualifications) && teacher.qualifications.length > 0
              ? teacher.qualifications.join(", ")
              : "N/A"}
          </p>
          {Array.isArray(teacher.post) && teacher.post.length > 0 && (
            <p><b>Post:</b> {teacher.post.join(", ")}</p>
          )}
          {teacher.employmentType && (
            <p><b>Employment Type:</b> {teacher.employmentType}</p>
          )}
        </div>
      </div>
    </>
  );
}

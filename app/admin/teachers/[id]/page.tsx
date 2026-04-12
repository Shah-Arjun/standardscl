"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

type Teacher = {
  id: number;
  teacherName: string;
  email: string;
  phone: string;
  experience: number;
  qualifications?: string[];
  photo?: string;
};





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

        const res = await fetch(`/api/admin/teachers/${id}`);

        if (!res.ok) {
          setTeacher(null);
          return;
        }

        const data = await res.json();
        setTeacher(data);
      } catch (err) {
        console.error(err);
        setTeacher(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);




  if (loading) return <p className="p-6">Loading...</p>;

  if (!teacher) return <p className="p-6 text-red-500">Teacher not found</p>;





  return (
    <>
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back
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
          <h1 className="text-2xl font-bold text-center">
            {teacher.teacherName}
          </h1>

          <p>
            <b>ID:</b> SSBS {teacher.id}
          </p>
          <p>
            <b>Email:</b> {teacher.email}
          </p>
          <p>
            <b>Phone:</b> {teacher.phone}
          </p>
          <p>
            <b>Experience:</b> {teacher.experience} years
          </p>

          <p>
            <b>Qualifications:</b> {teacher.qualifications?.join(", ") || "N/A"}
          </p>
        </div>
      </div>
    </>
  );
}

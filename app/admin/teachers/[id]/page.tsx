"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { set } from "date-fns";

type Teacher = {
  id: number;
  teacherName: string;
  email: string;
  phone: string;
  experience: number;
  qualifications?: string[];
};

export default function TeacherDetailPage() {
  const { id } = useParams(); 

  console.log('Teacher ID:', id);     //debug

  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log("id:", id);  //debug
    if (!id) return;
  
    const fetchTeacher = async () => {
      const res = await fetch(`/api/admin/teachers/${id}`);
  
      if (!res.ok) {
        console.error("Failed to fetch teacher");
        setTeacher(null);
        setLoading(false);
        return;
      }
  
      const data = await res.json();
      setTeacher(data);
    };
  
    fetchTeacher();
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading teacher...</p>;
  }

  if (!teacher) {
    return <p className="p-6 text-red-500">Teacher not found</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">



<button
    onClick={() => history.back()}
    className="mt-6 mb-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Go Back
  </button>

      <div className="bg-white shadow rounded-xl p-6 space-y-3">
        <h1 className="text-2xl font-bold">{teacher.teacherName}</h1>

        <p><b>ID:</b> {teacher.id}</p>
        <p><b>Email:</b> {teacher.email}</p>
        <p><b>Phone:</b> {teacher.phone}</p>
        <p><b>Experience:</b> {teacher.experience} years</p>

        <p>
          <b>Qualifications:</b>{" "}
          {teacher.qualifications?.join(", ") || "N/A"}
        </p>
      </div>


{teacher ===null && <h1 className="mt-20 text-3xl italic">Coming Soon</h1>}
    </div>
  );
}
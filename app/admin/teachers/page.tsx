"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, User } from "lucide-react";
import Link from "next/link";



interface Teacher {
  id: number;
  teacherName: string;
  subject: string;
  email?: string;
  phone?: string;
  qualifications?: string;
  experience?: string;
  status?: string;
}



function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const teachersPerPage = 8;


  useEffect(() => {
    async function fetchTeachers() {
      setLoading(true);
      try {
        const res = await fetch("/api/teachers");
        const data = await res.json();
        setTeachers(data || []);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeachers();
  }, []);




  // Pagination
  const totalPages = Math.ceil(teachers.length / teachersPerPage);
  const paginatedTeachers = teachers.slice(
    currentPage * teachersPerPage,
    (currentPage + 1) * teachersPerPage
  );




  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
          <p className="text-gray-600 mt-1">Manage school teachers and staff</p>
        </div>
        <div className="text-lg text-gray-500">
          Total Teachers: <span className="font-semibold text-gray-900">{teachers.length}</span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-amber-600" />
            <p className="mt-4 text-gray-600">Loading teachers...</p>
          </div>
        ) : teachers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <User className="h-16 w-16 text-gray-300" />
            <p className="mt-4 text-xl font-medium text-gray-700">No teachers found</p>
            <p className="text-gray-500 mt-2">Add teachers from the Add Teacher section</p>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Qualifications</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Experience</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedTeachers.map((teacher, index) => (
                    <motion.tr
                      key={teacher.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="hover:bg-amber-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{teacher.teacherName}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{teacher.qualifications || "—"}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {teacher.experience ? `${parseInt(teacher.experience)} years` : "—"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          {teacher.email && <div>{teacher.email}</div>}
                          {teacher.phone && <div className="text-gray-500">{teacher.phone}</div>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                            teacher.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {teacher.status || "Active"}
                        </span>
                      </td>
{/* see more */}
                      <td className="px-6 py-4">
                        <Link href={`/admin/teachers/${teacher.id}`} className="text-blue-600 hover:underline">
                          See more
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className="px-4 py-2 text-md font-medium text-gray-600 disabled:opacity-40 hover:bg-white rounded-lg transition"
                >
                  &lt;&lt; Previous
                </button>

                <div className="text-sm text-gray-600">
                  Page <span className="font-semibold">{currentPage + 1}</span> of {totalPages}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="px-4 py-2 text-md font-medium text-gray-600 disabled:opacity-40 hover:bg-white rounded-lg transition"
                >
                  Next &gt;&gt;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Teachers;
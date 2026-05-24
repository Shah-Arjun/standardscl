"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllNotices, deleteNotice } from "@/app/actions/notice";
import { Notice } from "@/lib/types/notice";

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // Fetch notices
  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await getAllNotices();
      const data = res.data || [];
      // newest first
      setNotices([...data].reverse());
    } catch (error) {
      console.error("Failed to load notices", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Delete notice
  const handleDelete = async () => {
    if (!deleteId) return;
  
    setLoadingDelete(true);
  
    try {
      const res = await deleteNotice(deleteId);
      if (res.success) {
        setNotices((prev) => prev.filter((n) => n.id !== deleteId));
        setDeleteId(null);
      } else {
        alert(res.message || "Failed to delete notice");
      }
    } catch (error) {
      console.error("Failed to delete notice:", error);
      alert("An error occurred while deleting the notice.");
    } finally {
      setLoadingDelete(false);
    }
  };




  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notices</h1>
          <p className="text-gray-500">Manage all school notices</p>
        </div>

        <Link
          href="/admin/notices/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add New Notice
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading...</div>
        ) : notices.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No notices found</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Posted At</th>
                <th className="p-4">Posted By</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {notices.map((notice) => (
                <tr key={notice.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{notice.title}</td>
                  <td className="p-4">{notice.category}</td>
                  <td className="p-4 text-sm text-gray-500">
                    {new Date(notice.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">{notice.postedBy}</td>
                  <td className="p-4">{notice.content}</td>

                  {/* action */}
                  <td className="p-4 text-right space-x-4">
                    <Link
                      href={`/admin/notices/${notice.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => setDeleteId(notice.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


{/* confirm popup */}
      {deleteId && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-[320px] shadow-lg text-center">
      
      <h2 className="text-lg font-semibold text-gray-800">
        Delete Notice?
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        This action cannot be undone.
      </p>

      <div className="flex gap-3 mt-5 justify-center">
        
        <button
          onClick={() => setDeleteId(null)}
          className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          disabled={loadingDelete}
          className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
        >
          {loadingDelete ? "Deleting..." : "Delete"}
        </button>

      </div>
    </div>
  </div>
)}
    </div>
  );
}
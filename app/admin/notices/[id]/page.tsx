"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getNoticeById } from "@/app/actions/notice";
import { Notice } from "@/lib/types/notice";

export default function NoticeDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchNotice = async () => {
      try {
        setLoading(true);

        const res = await getNoticeById(Number(id));

        if (!res.success) {
          throw new Error(res.message || "Failed to fetch notice");
        }

        setNotice(res.data);

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading notice...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  if (!notice) {
    return <div className="p-6 text-center text-gray-500">Notice not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border">

        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
          {notice.category}
        </span>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {notice.title}
        </h1>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {notice.content}
        </p>

        <div className="mt-6 text-sm text-gray-500 border-t pt-4">
          Created at:{" "}
          {new Date(notice.createdAt).toLocaleString()}
        </div>

      </div>
    </div>
  );
}
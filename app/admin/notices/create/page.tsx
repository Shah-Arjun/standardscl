"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNoticePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [postedBy, setPostedBy] = useState("Principal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !category || !postedBy) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          category,
          postedBy,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add notice");
      }

      router.push("/admin/notices");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  
  return (
    <>
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Back Button */}
      {/* Header */} 
      <div>
        <h1 className="text-3xl font-bold">Add Notice</h1>
        <p className="text-gray-500">Create a new school notice</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow border">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notice title"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            className="w-full border rounded-lg p-2 h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter full notice content"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border rounded-lg p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Admissions</option>
            <option>Sports</option>
            <option>Events</option>
            <option>Academic</option>
            <option>Meeting</option>
            <option>Holiday</option>
            <option>News</option>
            <option>Exam</option>
            <option>Result</option>
            <option>General</option>
          </select>
        </div>


        {/* Posted by */}
        <div>
          <label className="block text-sm font-medium mb-1">Posted By</label>
          <select
            className="w-full border rounded-lg p-2"
            value={postedBy}
            onChange={(e) => setPostedBy(e.target.value)}
          >
            <option>Principal</option>
            <option>Exam Coordinator</option>
            <option>Vice Principal</option>
          </select>
        </div>


        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Notice"}
        </button>
      </form>
    </div>
    </>
  );
}
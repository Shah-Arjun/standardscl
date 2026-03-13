"use client"

import React, {ChangeEvent, useState } from 'react';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null); // store the selected file

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // save the file in state
    }
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file");

    setLoading(true);

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const result = await res;
    console.log(result)
      alert(result || "Upload successful");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-6">
      <h3 className="text-xl font-bold mb-4">Upload Images</h3>

      <input
        type="file"
        name="photo"
        onChange={handleFileChange}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        type="button"
        disabled={loading}
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        {loading ? "Saving..." : "Add Images"}
      </button>
    </div>
  );
};

export default AdminDashboard;
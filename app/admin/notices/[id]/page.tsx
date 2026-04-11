"use client"

import { use } from "react";

function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center bg-white shadow-md rounded-2xl p-10 max-w-md w-full border">
        
        <div className="text-5xl mb-4">🚧</div>

        <h1 className="text-2xl font-bold text-gray-800">
          Notice Details Coming Soon
        </h1>

        <p className="text-gray-500 mt-2">
          This feature is under development
        </p>

        <div className="mt-6 bg-gray-100 rounded-lg px-4 py-3">
          <p className="text-sm text-gray-600">Notice ID</p>
          <p className="text-xl font-semibold text-gray-900">{id}</p>
        </div>

        <button
          onClick={() => history.back()}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NoticeDetailPage;
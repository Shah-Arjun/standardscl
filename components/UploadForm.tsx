"use client";
import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setUrl(data.url);
      setFile(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-2xl shadow-lg border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
        Upload Your File
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted rounded-xl cursor-pointer hover:border-primary transition-colors bg-muted/20 text-muted-foreground"
        >
          {file ? (
            <p className="text-sm">{file.name}</p>
          ) : (
            <>
              <UploadCloud className="w-8 h-8 mb-2 text-primary" />
              <p className="text-sm text-center">Click or drag file here to upload</p>
            </>
          )}
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!file || loading}
          className={`w-full py-3 px-6 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
            file
              ? "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>

        {/* Uploaded URL */}
        {url && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <a href={url} target="_blank" className="underline">
              {url}
            </a>
          </div>
        )}
      </form>
    </div>
  );
}

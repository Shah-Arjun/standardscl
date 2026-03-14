"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// ──────────────────────────────────────────────── Types
interface TeacherFormData {
  teacherName: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  employmentType: string;
  qualifications: string[];
  fieldOfStudy: string[];
  subjectsTeaches: string[];
  posts: string[];
  experience: string;
}

type QualificationCategory =
  | "Bachelor"
  | "Master"
  | "Diploma"
  | "Certification"
  | "Other";
const qualificationOptions: Record<QualificationCategory, string[]> = {
  Bachelor: [
    "B.Ed Mathematics",
    "B.Ed Science",
    "B.Ed English",
    "B.Ed Social Studies",
    "B.Ed Nepali",
    "BSc Computer Science / IT",
    "B.A. English / Literature",
    "BSc Physics",
    "BSc Chemistry",
    "BSc Biology",
    "B.Com / BBA",
    "B.Ed Special Education",
    "Other", // ← added
  ],
  Master: [
    "M.Ed Curriculum & Instruction",
    "M.Ed Educational Leadership",
    "M.A English / Literature",
    "M.Sc Physics",
    "M.Sc Chemistry",
    "M.Sc Biology",
    "MBA",
    "M.Ed Special Education",
    "Other", // ← added
  ],
  Diploma: [
    "Montessori Teacher Certification",
    "Early Childhood Education",
    "Computer Education / ICT",
    "Postgraduate Diploma in Education (PGDE)",
    "Other", // ← added
  ],
  Certification: [
    "TESOL / TEFL",
    "Other professional certifications",
    "Other", // ← added (or merge if you prefer)
  ],
  Other: [
    "Other", // makes sense here too
  ],
};

type MultiSelectKey =
  | "qualifications"
  | "fieldOfStudy"
  | "subjectsTeaches"
  | "posts";

const defaultOptions = {
  fieldOfStudy: [
    "Mathematics",
    "Science",
    "Computer Science/Engineering",
    "Education",
    "Sanskrit",
    "Economics",
    "Other",
  ],
  subjectsTeaches: ["Math", "Science", "English", "Nepali", "Other"],
  posts: [
    "Founder",
    "Principal",
    "Vice-Principal",
    "Exam Coordinator",
    "ECA Coordinator",
    "ECL Coordinator",
    "Accountant",
    "ECA Member",
    "ECL Member",
    "Assistant Teacher",
    "Martial Art(Karate) Teacher",
    "Dance Teacher",
    "Music Teacher",
    "Arts/Drawing Teacher",
    "Other",
  ],
};

// ──────────────────────────────────────────────── Component
export default function AddTeacher() {
  const [formData, setFormData] = useState<TeacherFormData>({
    teacherName: "",
    gender: "male",
    email: "",
    phone: "",
    address: "",
    employmentType: "Full Time",
    qualifications: [],
    fieldOfStudy: [],
    subjectsTeaches: [],
    posts: [],
    experience: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ──────────────────────────────────────────────── Add this state back (only for qualifications filtering)
  const [selectedCategory, setSelectedCategory] = useState<
    QualificationCategory | ""
  >("");



  // ──────────────────────────────────────────────── Optional: helper to get current options
  const getQualificationOptions = () => {
    if (!selectedCategory) return [];
    return qualificationOptions[selectedCategory] || [];
  };
  // const [selectedCategory, setSelectedCategory] = useState<QualificationCategory | "">("");
  // const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);

  const [customValues, setCustomValues] = useState<
    Record<MultiSelectKey, string>
  >({
    qualifications: "",
    fieldOfStudy: "",
    subjectsTeaches: "",
    posts: "",
  });

  // Sync qualifications
  // useEffect(() => {
  //   setFormData((prev) => ({ ...prev, qualifications: [...selectedDegrees] }));
  // }, [selectedDegrees]);

  // const handleDegreeSelect = (degree: string, checked: boolean) => {
  //   setSelectedDegrees((prev) =>
  //     checked ? [...prev, degree] : prev.filter((d) => d !== degree)
  //   );
  // };

  // const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const category = e.target.value as QualificationCategory;
  //   setSelectedCategory(category);
  //   setSelectedDegrees([]);
  // };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (
    key: MultiSelectKey,
    value: string,
    checked: boolean,
  ) => {
    setFormData((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: checked ? [...arr, value] : arr.filter((v) => v !== value),
      };
    });
  };

  const handleCustomInputChange = (key: MultiSelectKey, value: string) => {
    setCustomValues((prev) => ({ ...prev, [key]: value }));
  };

  // ──────────────────────────────────────────────── Inside the component (add / update these)
  const handleAddCustomValue = (key: MultiSelectKey) => {
    const val = customValues[key]?.trim();
    if (!val) return;
  
    setFormData((prev) => {
      const updated = [
        ...prev[key].filter((v) => v !== "Other"),
        val,
      ];
  
      return { ...prev, [key]: updated };
    });
  
    setCustomValues((prev) => ({ ...prev, [key]: "" }));
  };
  
  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!file) {
      setMessage("Please upload a photo");
      setLoading(false);
      return;
    }

    if (formData.qualifications.length === 0) {
      setMessage("Please select at least one qualification");
      setLoading(false);
      return;
    }

    console.log("Submitting qualifications:", formData.qualifications);
    console.log("All form data:", formData);

    const dataToSend = { ...formData }; // prepareMultiSelectArrays can be simplified if you adopt add-as-extra approach

    const formDataToSend = new FormData();
    formDataToSend.append("teacherName", dataToSend.teacherName);
    formDataToSend.append("gender", dataToSend.gender);
    formDataToSend.append("email", dataToSend.email);
    formDataToSend.append("phone", dataToSend.phone);
    formDataToSend.append("address", dataToSend.address);
    formDataToSend.append("employmentType", dataToSend.employmentType);

    // ← Fix these names to plural (most common convention)
    formDataToSend.append(
      "qualifications",
      JSON.stringify(dataToSend.qualifications),
    );
    formDataToSend.append(
      "fieldOfStudy",
      JSON.stringify(dataToSend.fieldOfStudy),
    );
    formDataToSend.append(
      "subjectsTeaches",
      JSON.stringify(dataToSend.subjectsTeaches),
    );
    formDataToSend.append("posts", JSON.stringify(dataToSend.posts));

    formDataToSend.append("experience", dataToSend.experience);
    formDataToSend.append("photo", file);



    try {
      const res = await fetch("/api/teachers/add", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const text = await res.json();
        throw new Error(text || "Failed to add teacher");
      }

      alert("Teacher added successfully!\nThank you — have a great day!");
      // Optional: reset form here
    } catch (err: any) {
      setMessage(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };



  // ──────────────────────────────────────────────── Updated renderMultiSelect (better UX)
  const renderMultiSelect = (key: MultiSelectKey, options: string[]) => (
    <div className="space-y-2">
      <label className="block text-md font-medium text-gray-700 capitalize">
        {key.replace(/([A-Z])/g, " $1")}
      </label>

      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-md cursor-pointer transition-colors
            ${
              formData[key].includes(opt)
                ? "border-blue-600 bg-blue-50 text-blue-800"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <input
              type="checkbox"
              checked={formData[key].includes(opt)}
              onChange={(e) => handleMultiSelect(key, opt, e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="select-none">{opt}</span>
          </label>
        ))}
      </div>

      {formData[key].includes("Other") && (
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <input
            type="text"
            placeholder={
              key === "qualifications" && selectedCategory
                ? `e.g. PhD in ${selectedCategory}, Yoga Instructor Diploma, ...`
                : "Specify other..."
            }
            value={customValues[key]}
            onChange={(e) => handleCustomInputChange(key, e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={() => handleAddCustomValue(key)}
            disabled={!customValues[key]?.trim()}
            className={`min-w-[80px] px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors
            ${
              customValues[key]?.trim()
                ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Add New Teacher
            </h2>
            <p className="mt-2 text-blue-100 text-center text-md md:text-base">
              Please fill in all required fields (*) and upload a clear
              passport-size photo.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="teacherName"
                  required
                  value={formData.teacherName}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
              />
            </div>

            {/* Employment & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Employment Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="employmentType"
                  required
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="experience"
                  placeholder="5"
                  min="0"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-2 block w-full p-2 rounded-lg border-2 hover:border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
                />
              </div>
            </div>

            {/* Qualifications - Category + Chips */}
            {/* Qualifications */}
            <div className="space-y-3">
              <label className="block text-md font-medium text-gray-700">
                Qualifications <span className="text-red-500">*</span>
              </label>

              <select
                value={selectedCategory}
                onChange={(e) => {
                  const cat = e.target.value as QualificationCategory;
                  setSelectedCategory(cat);

                  // Clear previous qualifications when changing category
                  // This is strongly recommended for clean UX
                  setFormData((prev) => ({ ...prev, qualifications: [] }));
                }}
                className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
              >
                <option value="">Select qualification category...</option>
                {Object.keys(qualificationOptions).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {selectedCategory ? (
                renderMultiSelect("qualifications", getQualificationOptions())
              ) : (
                <p className="text-sm text-gray-500 mt-2 italic">
                  Please select a category to see available qualifications
                </p>
              )}
            </div>

            {/* Other multi-select fields */}
            {renderMultiSelect("fieldOfStudy", defaultOptions.fieldOfStudy)}
            {renderMultiSelect(
              "subjectsTeaches",
              defaultOptions.subjectsTeaches,
            )}
            {renderMultiSelect("posts", defaultOptions.posts)}

            {/* Photo Upload */}
            <div className="space-y-3">
              <label className="block text-md font-medium text-gray-700">
                Passport Size Photo <span className="text-red-500">*</span>
              </label>

              <div className="mt-1 flex justify-center rounded-lg border-2 border-dashed border-gray-700 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto h-32 w-32 object-cover rounded-full border-2 border-gray-200 shadow-sm"
                    />
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  <div className="flex text-md text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="sr-only"
                        required={!preview}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, max 5MB</p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Add Teacher"
                )}
              </button>
            </div>

            {message && (
              <p
                className={`text-center text-md ${message.includes("success") ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

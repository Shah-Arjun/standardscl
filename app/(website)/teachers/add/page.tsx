"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Data type
interface TeacherFormData {
  teacherName: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  employmentType: string;
  qualifications: string[];
  fieldsOfStudy: string[];
  subjectsTeaches: string[];
  posts: string[];
  experience: string;
}

const defaultOptions = {
  qualifications: ["BEd Mathematics", "BEd Science", "BEd English", "Other"],
  fieldsOfStudy: ["Mathematics", "Science", "English", "Other"],
  subjectsTeaches: ["Math", "Science", "English", "Nepali", "Other"],
  posts: [
    "Principal",
    "Vice-Principal",
    "Assistant Teacher",
    "Accountant",
    "Other",
  ],
};

export default function AddTeacher() {
  const [formData, setFormData] = useState<TeacherFormData>({
    teacherName: "",
    gender: "male",
    email: "",
    phone: "",
    address: "",
    employmentType: "Full Time",
    qualifications: [],
    fieldsOfStudy: [],
    subjectsTeaches: [],
    posts: [],
    experience: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [customValues, setCustomValues] = useState<{
    [key: string]: string;
  }>({
    qualifications: "",
    fieldsOfStudy: "",
    subjectsTeaches: "",
    posts: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // handle multi-select checkboxes
  const handleMultiSelect = (
    key: "qualifications" | "fieldsOfStudy" | "subjectsTeaches" | "posts",
    value: string,
    checked: boolean
  ) => {
    setFormData((prev) => {
      const arr = prev[key];
      if (checked) return { ...prev, [key]: [...arr, value] };
      return { ...prev, [key]: arr.filter((v) => v !== value) };
    });
  };

  // handle custom value input
  const handleAddCustomValue = (
    key: "qualifications" | "fieldsOfStudy" | "subjectsTeaches" | "posts"
  ) => {
    const value = customValues[key].trim();
    if (!value) return;
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));
    setCustomValues((prev) => ({ ...prev, [key]: "" }));
  };

  const handleCustomInputChange = (
    key: string,
    value: string
  ) => {
    setCustomValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    if (!file) {
      setMessage("Please select a photo");
      setLoading(false);
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("teacherName", formData.teacherName);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("employmentType", formData.employmentType);

    formDataToSend.append("qualification", JSON.stringify(formData.qualifications));
    formDataToSend.append("fieldOfStudy", JSON.stringify(formData.fieldsOfStudy));
    formDataToSend.append("subjectTeaches", JSON.stringify(formData.subjectsTeaches));
    formDataToSend.append("post", JSON.stringify(formData.posts));
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("photo", file); // attach the photo
  
    try {
      const res = await fetch("/api/teachers/add", {
        method: "POST",
        body: formDataToSend, // no JSON, no Content-Type header
      });
  
      const result = await res.json();
      if (res.ok) {
        setMessage("Teacher added successfully!");
        // Reset form...
      } else setMessage(result.message);
    } catch (err) {
      setMessage("Submit failed");
    }
  
    setLoading(false);
  };

  // render multi-select with custom input
  const renderMultiSelect = (
    key: "qualifications" | "fieldsOfStudy" | "subjectsTeaches" | "posts",
    options: string[]
  ) => (
    <div className="space-y-2">
      <label className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center space-x-1 border p-1 rounded cursor-pointer">
            <input
              type="checkbox"
              checked={formData[key].includes(opt)}
              onChange={(e) => handleMultiSelect(key, opt, e.target.checked)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {formData[key].includes("Other") && (
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            placeholder="Add custom value"
            value={customValues[key]}
            onChange={(e) => handleCustomInputChange(key, e.target.value)}
            className="p-1 border rounded flex-1"
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-3 rounded"
            onClick={() => handleAddCustomValue(key)}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Teacher</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="teacherName"
          placeholder="Teacher Name"
          value={formData.teacherName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

{/* email */}
      <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Employment Type */}
        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
          <option>Other</option>
        </select>

        {/* Multi-select dropdowns */}
        {renderMultiSelect("qualifications", defaultOptions.qualifications)}
        {renderMultiSelect("fieldsOfStudy", defaultOptions.fieldsOfStudy)}
        {renderMultiSelect("subjectsTeaches", defaultOptions.subjectsTeaches)}
        {renderMultiSelect("posts", defaultOptions.posts)}

        {/* Experience */}
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Photo */}
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) setFile(e.target.files[0]);
          }}
          className="w-full p-2 border rounded"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Saving..." : "Add Teacher"}
        </button>
      </form>

      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
}
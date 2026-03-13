"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface TeacherFormData {
  teacherName: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  employmentType: string;
  qualification: string;
  fieldOfStudy: string;
  subjectTeaches: string;
  post: string;
  experience: string;
}

export default function AddTeacher() {

  const [formData, setFormData] = useState<TeacherFormData>({
    teacherName: "",
    gender: "male",
    email: "",
    phone: "",
    address: "",
    employmentType: "Full Time",
    qualification: "",
    fieldOfStudy: "",
    subjectTeaches: "",
    post: "",
    experience: ""
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");



  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };



  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }

  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!file) {
      setMessage("Please select image");
      return;
    }

    setLoading(true);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("photo", file);

    try {

      const res = await fetch("/api/teachers/add", {
        method: "POST",
        body: data
      });

      const result = await res.json();

      if (res.ok) {

        setMessage("Teacher added successfully");

        setFormData({
          teacherName: "",
          gender: "male",
          email: "",
          phone: "",
          address: "",
          employmentType: "Full Time",
          qualification: "",
          fieldOfStudy: "",
          subjectTeaches: "",
          post: "",
          experience: ""
        });

        setFile(null);

      } else {
        setMessage(result.message);
      }

    } catch (error) {

      setMessage("Upload failed");

    }

    setLoading(false);

  };



  return (

    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-6">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Teacher
      </h2>

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


        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


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


        {/* Qualification */}
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


        {/* Field of Study */}
        <input
          type="text"
          name="fieldOfStudy"
          placeholder="Field Of Study"
          value={formData.fieldOfStudy}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


        {/* Subject */}
        <input
          type="text"
          name="subjectTeaches"
          placeholder="Subject Teaches"
          value={formData.subjectTeaches}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


        {/* Position */}
        <input
          type="text"
          name="post"
          placeholder="Position"
          value={formData.post}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


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
          accept="image/*"
          onChange={handleFileChange}
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

      {message && (
        <p className="text-center mt-4 text-green-600">{message}</p>
      )}

    </div>

  );

}
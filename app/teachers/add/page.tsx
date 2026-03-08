"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Data types
interface TeacherFormData {
  full_name: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  qualification: string;
  subject_specialization: string[];
  positions: string[]; // <-- changed to array for multiple positions
  working_period: string;
  years_of_teaching_experience: string;
}

const subjects = [
  "Math",
  "Science",
  "English",
  "Nepali",
  "Social",
  "Computer",
  "Serofero",
  "GK",
  "Optional Math",
  "Accountancy",
  "Dancing",
  "Singing",
  "Karate",
];

const positions = [
  "Principal",
  "Vice-Principal",
  "Exam Coordinator",
  "ECA Coordinator",
  "ELC Coordinator",
  "Accountant",
  "ECA Member",
  "ECL Member",
  "Assistant Teacher",
  "Karate Teacher",
  "Dance Teacher",
  "Music Teacher",
  "Arts/Drawing Teacher",
];

const workingPeriods = ["Full Time", "Part Time"];





// Main component
export default function AddTeacher() {
  const [formData, setFormData] = useState<TeacherFormData>({
    full_name: "",
    gender: "Male",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    subject_specialization: [],
    positions: [], // <-- multiple positions
    working_period: "Full Time",
    years_of_teaching_experience: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");





  // handle form field changes on typing
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  // handle file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };



  // handle checkbox changes
  const handleCheckboxChange = (key: "subject_specialization" | "positions", value: string, checked: boolean) => {
    setFormData((prev) => {
      const selected = prev[key];
      if (checked) {
        return {
          ...prev,
          [key]: [...selected, value],
        };
      } else {
        return {
          ...prev,
          [key]: selected.filter((v) => v !== value),
        };
      }
    });
  };




  // handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select an image!");
      return;
    }

    setLoading(true);
    const data = new FormData();

    // Convert arrays to comma separated strings
    (Object.keys(formData) as (keyof TeacherFormData)[]).forEach((key) => {
      if (key === "subject_specialization" || key === "positions") {
        data.append(key, formData[key].join(","));
      } else {
        data.append(key, formData[key]);
      }
    });

    data.append("image", file);

    try {
      const res = await fetch("/api/teachers/create", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage(result.message);
        setFormData({
          full_name: "",
          gender: "Male",
          email: "",
          phone: "",
          address: "",
          qualification: "",
          subject_specialization: [],
          positions: [],
          working_period: "Full Time",
          years_of_teaching_experience: "",
        });
        setFile(null);
      } else {
        setMessage(result.error || "Something went wrong");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage("Upload failed: " + error.message);
      } else {
        setMessage("Upload failed");
      }
    }

    setLoading(false);
  };





  return (
    <div className="max-w-xl w-full mx-auto p-6 bg-white shadow rounded mt-6 sm:p-8 md:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Teacher Details</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* full name */}
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
          required
        />

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>


        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
          required
        />


        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
          required
        />


        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
        />


        {/* Working Period */}
        <select
          name="working_period"
          value={formData.working_period}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
        >
          {workingPeriods.map((wp) => (
            <option key={wp} value={wp}>
              {wp}
            </option>
          ))}
        </select>



        {/* Qualification */}
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
        />



        {/* Subjects checkboxes */}
        <div className="space-y-2">
          <label className="font-medium">Subject Specialization:</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {subjects.map((subj) => (
              <label
                key={subj}
                className="flex items-center space-x-2 border p-2 rounded cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  value={subj}
                  checked={formData.subject_specialization.includes(subj)}
                  onChange={(e) =>
                    handleCheckboxChange("subject_specialization", subj, e.target.checked)
                  }
                  className="accent-blue-600"
                />
                <span className="text-sm sm:text-base">{subj}</span>
              </label>
            ))}
          </div>
        </div>



        {/* Positions checkboxes */}
        <div className="space-y-2">
          <label className="font-medium">Position / Post:</label>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {positions.map((pos) => (
              <label
                key={pos}
                className="flex items-center space-x-2 border p-2 rounded cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  value={pos}
                  checked={formData.positions.includes(pos)}
                  onChange={(e) =>
                    handleCheckboxChange("positions", pos, e.target.checked)
                  }
                  className="accent-blue-600"
                />
                <span className="text-sm sm:text-base">{pos}</span>
              </label>
            ))}
          </div>
        </div>



        {/* Years of experience */}
        <input
          type="number"
          name="years_of_teaching_experience"
          placeholder="Years of Experience"
          value={formData.years_of_teaching_experience}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
          min="0"
        />



        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded focus:outline-blue-500"
          required
        />


      {/* submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {loading ? "Uploading..." : "Add Teacher"}
        </button>

        
      </form>
    </div>
  );
}
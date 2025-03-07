"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const userType = searchParams.get("type") || "rider"; // Default to rider

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering as ${userType}: ${JSON.stringify(formData)}`);
    // Here you can send data to your backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

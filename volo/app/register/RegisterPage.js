"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Eye, EyeOff, X } from "lucide-react";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState("rider"); // Default to "rider"

  // Fetch search param inside useEffect to avoid hydration mismatch
  useEffect(() => {
    const type = searchParams.get("type");
    if (type) setUserType(type);
  }, [searchParams]);

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

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Function to close the register screen and go back
  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* X Button (Close Button) */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

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
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 pr-10 bg-gray-700 rounded"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
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

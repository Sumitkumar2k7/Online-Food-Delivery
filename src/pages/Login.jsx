import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center gap-2 border p-3 rounded-xl">
              <FaUser className="text-gray-500" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center gap-2 border p-3 rounded-xl">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

          {/* Redirect to Signup */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 font-bold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

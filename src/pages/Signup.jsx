import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        alert("Signup Successful!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSignup}>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2">
                            Full Name
                        </label>
                        <div className="flex items-center gap-2 border p-3 rounded-xl">
                            <FaUser className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2">
                            Email
                        </label>
                        <div className="flex items-center gap-2 border p-3 rounded-xl">
                            <FaEnvelope className="text-gray-500" />
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2">
                            Password
                        </label>
                        <div className="flex items-center gap-2 border p-3 rounded-xl">
                            <FaLock className="text-gray-500" />
                            <input
                                type="password"
                                placeholder="Create password"
                                className="w-full outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Signup
                    </button>

                    {/* Login Redirect */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <span
                            className="text-green-600 font-bold cursor-pointer"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
}

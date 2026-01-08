import { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("❌ Please enter a valid email address");
      setMessage("");
      return;
    }

    setError("");
    setMessage("✅ Your message has been submitted successfully!");
    e.target.reset();
  };

  return (
    <>
      {/* GAP + DIVIDER BETWEEN SECTIONS */}
      <div className="w-full flex justify-center my-12">
      </div>

      {/* CONTACT SECTION */}
      <section className="w-full py-20 bg-[#f2fff8]">
        <div className="max-w-3xl mx-auto px-4">

          {/* HEADING */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Any Problem?{" "}
              <span className="text-red-500">Contact Us</span>
            </h2>
            <p className="text-gray-600 mt-3">
              We're here to help you anytime.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-5"
          >
            {/* Name */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-5 py-3">
              <FaUser className="text-red-500" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-5 py-3">
              <FaEnvelope className="text-red-500" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-4 border border-gray-300 rounded-xl px-5 py-3">
              <FaComment className="text-red-500 mt-1" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                required
                className="w-full outline-none resize-none"
              ></textarea>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Success */}
            {message && (
              <p className="text-green-600 text-sm">{message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

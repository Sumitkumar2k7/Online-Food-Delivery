import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaUtensils } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Check Login Status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Navbar Links List
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Chefs", href: "#chefs" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <a
          className="flex items-center gap-2 p-2 rounded cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaUtensils size={30} style={{ color: "#e63946" }} />
          <h1
            className="text-2xl sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            <span style={{ color: "#e63946" }}>Fresh</span>
            <span style={{ color: "#2a9d8f" }}>Dish</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-green-600 transition font-bold"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Login / Signup / Logout Buttons */}
          {!isLoggedIn ? (
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Signup
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 pt-2 shadow-md">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2 border-b">
              <a
                href={link.href}
                className="block text-gray-700 hover:text-green-600 transition font-bold"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Mobile Login / Logout Buttons */}
          {!isLoggedIn ? (
            <div>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
                className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Signup
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
              className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
}

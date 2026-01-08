import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaUtensils } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Chefs", href: "#chefs" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaUtensils size={30} style={{ color: "#e63946" }} />
          <h1
            className="text-2xl lg:text-3xl"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            <span style={{ color: "#e63946" }}>Fresh</span>
            <span style={{ color: "#2a9d8f" }}>Dish</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-green-600 font-bold">
                {link.name}
              </a>
            </li>
          ))}

          {!isLoggedIn ? (
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Signup
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 shadow-md">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2 border-b">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-bold text-gray-700"
              >
                {link.name}
              </a>
            </li>
          ))}

          {!isLoggedIn ? (
            <div className="mt-3">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
                className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg"
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
              className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
}

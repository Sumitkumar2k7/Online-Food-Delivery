import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-white">FreshDish</h2>
          <p className="text-gray-400 mt-3">
            FreshDish brings you delicious, healthy meals freshly prepared for you.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 8873841132</p>
          <p>📧 support@freshdish.com</p>

          <div className="flex gap-5 mt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} FreshDish
      </div>
    </footer>
  );
}

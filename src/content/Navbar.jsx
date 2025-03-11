import { Database } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#020817]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/svgs/Logo.svg" alt="Logo" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="#blog" className="text-gray-300 hover:text-white">
            Blog
          </a>
          <a href="#careers" className="text-gray-300 hover:text-white">
            Careers
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        <button className="bg-[#1E293B] px-4 py-2 rounded-lg hover:bg-[#2D3B4E] transition">
          Login
        </button>
      </div>
    </nav>
  );
}

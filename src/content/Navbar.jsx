import { useState } from "react";
import { Database } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        <button className="bg-[#1E293B] px-4 py-2 rounded-lg hover:bg-[#2D3B4E] transition hidden md:block">
          Login
        </button>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Database />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020817]">
          <a
            href="#services"
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Blog
          </a>
          <a
            href="#careers"
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Careers
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Contact
          </a>
          <button className="block w-full bg-[#1E293B] px-4 py-2 rounded-lg hover:bg-[#2D3B4E] transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

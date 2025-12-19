import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Project", path: "/project" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-[#0f1114]/70 border border-white/10 rounded-2xl mx-4 md:mx-8 px-6 py-4 shadow-lg sticky top-3 z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          MANISH<span className="text-gray-300">.</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400 border-b border-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-300 p-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 rounded-xl p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 px-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400 bg-[#1a1d21]"
                    : "text-gray-300 hover:bg-[#1b1e23] hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;

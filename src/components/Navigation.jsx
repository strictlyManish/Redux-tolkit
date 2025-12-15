import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
    { label: "Project", path: "/project" },
  ]

  return (
    <nav className="bg-gray-600 rounded p-4 mx-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-['Sekuya'] ">
            RAJZ MANISH
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex links gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition-colors ${
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white hover:text-gray-200"
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
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm py-2 px-2 rounded transition-colors ${
                  isActive
                    ? "text-yellow-300 bg-gray-600"
                    : "text-white hover:text-gray-200 hover:bg-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
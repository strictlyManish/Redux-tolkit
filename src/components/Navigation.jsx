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
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Project", path: "/project" },
    { label: "Edit", path: "/edit" },
  ]

  return (
    <nav className="bg-gray-800 backdrop-blur-3xl rounded-xl p-4 mx-4 shadow-2xl  font-mono sticky top-0  z-50">
      <div className="flex justify-between items-center">
        
        <div className="logo">
          <h1 className="text-xl sm:text-xl md:text-2xl font-bolder text-yellow-400 font-serif">
            RAJZ MANISH
          </h1>
        </div>

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

        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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

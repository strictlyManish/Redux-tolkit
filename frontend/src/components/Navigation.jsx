import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full bg-transparent'>
      <div className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2'>
        {/* Logo/Brand - optional */}
        <div className='text-white font-bold text-lg'>We Chat</div>

        {/* Desktop Navigation */}
        <div className='hidden sm:flex gap-2 bg-gray-900 shadow-2xl rounded-full px-5 py-4'>
          <NavLink 
            className={({isActive}) => isActive ? 'text-blue-600 px-3 py-1 rounded-full transition' : 'text-white px-3 py-1 rounded-full hover:text-gray-300 transition'} 
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? 'text-blue-600 px-3 py-1 rounded-full transition' : 'text-white px-3 py-1 rounded-full hover:text-gray-300 transition'} 
            to="/login"
          >
            Login
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? 'text-blue-600 px-3 py-1 rounded-full transition' : 'text-white px-3 py-1 rounded-full hover:text-gray-300 transition'} 
            to="/register"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='sm:hidden text-white p-2'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='sm:hidden bg-gray-900 shadow-2xl rounded-lg mx-4 mb-4 p-4'>
          <div className='flex flex-col gap-3'>
            <NavLink 
              className={({isActive}) => isActive ? 'text-blue-600 px-3 py-2 rounded transition block' : 'text-white px-3 py-2 rounded hover:bg-gray-800 transition block'} 
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              className={({isActive}) => isActive ? 'text-blue-600 px-3 py-2 rounded transition block' : 'text-white px-3 py-2 rounded hover:bg-gray-800 transition block'} 
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink 
              className={({isActive}) => isActive ? 'text-blue-600 px-3 py-2 rounded transition block' : 'text-white px-3 py-2 rounded hover:bg-gray-800 transition block'} 
              to="/register"
              onClick={() => setIsOpen(false)}
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation
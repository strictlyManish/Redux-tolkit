import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#050810] border-t border-gray-900 mt-12 md:mt-16'>
      {/* Main Content */}
      <div className='px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12'>
        <div className='w-full max-w-7xl mx-auto'>
          {/* Grid Content */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12'>

            {/* Brand Section */}
            <div className='col-span-1'>
              <h3 className='text-white text-lg md:text-xl font-bold mb-3'>
                Portfolio
              </h3>
              <p className='text-gray-400 text-xs sm:text-sm leading-relaxed'>
                Building amazing digital experiences through code and design.
              </p>
            </div>

            {/* Quick Links */}
            <div className='col-span-1'>
              <h4 className='text-white text-base md:text-lg font-semibold mb-3'>
                Quick Links
              </h4>
              <ul className='space-y-2'>
                {['Home', 'Projects', 'About', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-400 text-xs sm:text-sm hover:text-white transition duration-300'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Links */}
            <div className='col-span-1'>
              <h4 className='text-white text-base md:text-lg font-semibold mb-3'>
                Follow Me
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    label: "Github",
                    color: "hover:text-gray-300",
                    url: "https://github.com/strictlyManish",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                    url: "https://www.linkedin.com/in/rajz-manish-900453382/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    color: "hover:text-blue-300",
                    url: "https://x.com/XManish_",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    color: "hover:text-red-400",
                    url: "mailto:manishraz800@gmail.com",
                  },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition duration-300 p-2`}
                      aria-label={social.label}
                    >
                      <Icon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </a>
                  )
                })}
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-gray-900 pt-6 md:pt-8'>
            {/* Bottom Section */}
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
              <p className='text-gray-500 text-xs sm:text-sm text-center sm:text-left'>
                &copy; {currentYear} All rights reserved. Built with React & Tailwind CSS.
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
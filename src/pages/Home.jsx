import React from 'react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { LogoLoop } from './../components/LogoLoop'
import { motion } from 'framer-motion'
import { FaHtml5 } from 'react-icons/fa'
import { BiSolidFileCss } from 'react-icons/bi'

function Home() {

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    {node:<FaHtml5 />,title:"HTML" ,href:"https://html.com"},
    {node:<BiSolidFileCss />,title:"CSS" ,href:"https://html.com"}
  ]

  return (
    <div className="px-5 md:px-15 mt-10">
      
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-4"
        >
          <p className="text-2xl md:text-4xl font-light">HELLO</p>
          <p className="text-3xl md:text-5xl font-light text-gray-500">Hey I'm Manish</p>

          <p className="text-gray-300 leading-relaxed md:w-4/5">
            I build modern, responsive, and intuitive web experiences using React,
            Tailwind CSS, and JavaScript. I love transforming ideas into real products.
          </p>

          <div className="flex gap-4 mt-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 bg-yellow-800 rounded-3xl"
            >
              Hire
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 bg-gray-700 rounded-3xl"
            >
              Resume
            </motion.button>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex-1"
        >
          <img 
            src="hero.jpeg" 
            alt="hero web developer"
            className="rounded-3xl w-full max-w-md mx-auto shadow-lg"
          />
        </motion.div>

      </div>

      {/* LOGO LOOP */}
      <div className="mt-30 h-[180px] relative overflow-hidden w-full">

        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          scaleOnHover
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#101828"
        />

      </div>

    </div>
  )
}

export default Home
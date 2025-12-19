import { SiReact, SiTailwindcss } from 'react-icons/si'
import { FaHtml5, FaJs, FaNodeJs, FaPython } from "react-icons/fa";
import { LogoLoop } from './../components/LogoLoop'
import { motion } from 'framer-motion'
import { BiSolidFileCss } from 'react-icons/bi'
import { SiVite, SiRedux, SiBootstrap, SiSass, SiGithub, SiGit } from "react-icons/si";
import About from './About';    
import { useNavigate } from 'react-router-dom';
import Project from './Project';

function Home() {

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaHtml5 />, title: "HTML", href: "https://html.com" },
    { node: <BiSolidFileCss />, title: "CSS", href: "https://html.com" },
    { node: <FaJs />, title: "JS", href: "https://js.com" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiSass />, title: "Sass", href: "https://sass-lang.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <FaPython />, title: "Python", href: "https://python.org" },
  ]

  const navigate = useNavigate();

  return (
    <section className="px-5 md:px-20 py-20 bg-[#0b0d10] text-gray-300">

      {/* HERO */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex-1 flex flex-col gap-4"
        >

          {/* glow background */}
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-yellow-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-10 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>

          <p className="text-3xl md:text-5xl font-semibold text-white">Hey, I'm Manish</p>

          <p className="text-gray-400 leading-relaxed md:w-4/5">
            I build fast, responsive, and visually striking digital products using
            React, Tailwind, and modern JavaScript tooling.
          </p>

          {/* Hero buttons */}
          <div className="flex gap-5 mt-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              onClick={()=>navigate("/contact")}
              className="px-8 py-3 bg-yellow-500 text-black rounded font-medium"
            >
              Hire Me
            </motion.button>
          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex-1"
        >
          <img
            src="hero.jpeg"
            alt="web developer"
            loading="lazy"
            className="rounded-3xl w-full max-w-md mx-auto shadow-lg"
          />
        </motion.div>
      </div>

      {/* LOGOS */}
      <div className="mt-28 h-32 relative overflow-hidden w-full">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          scaleOnHover
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#0b0d10"
        />
      </div>
        <About/>
        <Project/>
    </section>
  )
}

export default Home

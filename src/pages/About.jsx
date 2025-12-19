import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {


  const navigate = useNavigate();



  return (
    <section className="bg-[#0b0d10] text-gray-200 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Title with subtle shapes */}
        <div className="relative">
          {/* Shape accents */}
          <div className="absolute -top-8 -left-6 w-52 h-52 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative text-4xl md:text-5xl font-bold"
          >
            About Me
            <span className="block h-1 w-24 bg-yellow-500 mt-2"></span>
          </motion.h2>
        </div>

        {/* Right Text + Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-6 text-gray-300">
            I’m a passionate web developer who loves building modern,
            high-performing, and visually appealing web apps using React,
            Tailwind CSS, and JavaScript.
          </p>
          <p className="mb-10 text-gray-400">
            Clean UI, smooth UX, and scalable code are my core principles.
            I enjoy turning complex requirements into simple user-friendly
            experiences.
          </p>

          <div className="flex gap-5">
            <motion.button
              onClick={()=>navigate("/project")}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-md"
            >
              View Works
            </motion.button>

            <motion.button
               onClick={()=>navigate("/resume")}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-yellow-500 text-yellow-500 rounded-md"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

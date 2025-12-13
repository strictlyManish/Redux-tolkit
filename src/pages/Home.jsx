import { Download, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Right side - Text & Buttons */}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left order-1 md:order-2">

            {/* Header Section */}
            <div className="mb-6 md:mb-8">
              <p className="text-gray-300 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                Professional Web Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Mr. Manish
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-600">
                Fronted Developer
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          {/* Left side - Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Yellow background shape */}
              <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-80 transform scale-100"></div>

              {/* Image placeholder - replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-linear-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
                  <img
                    src="hero.png"
                    alt="Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none">
        <h2 className="text-stroke text-[80px] md:text-[120px] lg:text-[160px] font-extrabold tracking-tighter whitespace-nowrap opacity-50">
          FULL STACK DEV
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-2 lg:order-1"
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 order-1 lg:order-2"
          >
            <p className="text-zinc-400 text-lg mb-2">Hi there! 👋 I&apos;m</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Name
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              A passionate developer who loves building beautiful, functional
              web experiences. I specialize in React, Firebase, and modern UI
              design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                Let&apos;s Talk <FaArrowRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors"
              >
                Download CV <FaArrowRight size={14} />
              </a>
            </div>

            {/* Social Icons */}
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

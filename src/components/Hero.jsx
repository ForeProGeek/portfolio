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
      <div className="absolute top-[55%] left-0 -translate-y-1/2 w-full pointer-events-none select-none z-0">
        <h2 className="text-stroke text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-extrabold tracking-tighter whitespace-nowrap opacity-60">
          FULL STACK DEV
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <img
              src="./profile.png"
              alt="Your Name"
              className="w-full max-w-[320px] md:max-w-[400px] drop-shadow-2xl object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-zinc-400 text-lg mb-2">Hey there!👋 I&apos;m</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Agboola Joshua
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              A passionate <span className="text-white font-medium">Full Stack Developer</span> who builds
              scalable web applications with clean code and intuitive user interfaces.
              I blend software engineering with thoughtful UI/UX design to create products that are both powerful and delightful to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-sm"
              >
                Let&apos;s Talk <FaArrowRight size={14} />
              </a>
              <a
                href="./resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors text-sm"
              >
                Download CV <FaArrowRight size={14} />
              </a>
            </div>

            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


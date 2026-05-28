import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              About Me
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
            I am a passionate Full Stack Developer with experience in building
            modern web applications. I love creating clean, user-friendly
            interfaces and solving real-world problems through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

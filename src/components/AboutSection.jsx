import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

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
          <SectionTitle>About Me</SectionTitle>

          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
            I am a <span className="text-white font-medium">Full Stack Developer</span>. I build modern web applications using{" "}
            <span className="text-white font-medium">React, Node.js, and Firebase</span>,
            while ensuring every interface is intuitive and visually polished.
            I believe great software is where robust engineering meets thoughtful design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function SectionTitle({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {children}
      </h2>
      <div className="flex items-center gap-2">
        <div className="w-12 h-1 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </motion.div>
  );
}

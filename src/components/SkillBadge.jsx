import { motion } from "framer-motion";
import { FaReact, FaJs, FaNode, FaFigma, FaHtml5 } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";

const iconComponents = {
  FaReact,
  FaJs,
  FaNode,
  FaPenNib,
  FaFigma,
  FaHtml5,
};

export default function SkillBadge({ name, percent, color, icon, index }) {
  const IconComponent = iconComponents[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 min-w-[90px]"
    >
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: color }}
      >
        {IconComponent && <IconComponent className="text-white text-2xl md:text-3xl" />}
      </div>
      <span className="text-white font-bold text-lg">{percent}%</span>
      <span className="text-zinc-500 text-sm">{name}</span>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconMap = {
  ...FaIcons,
  ...SiIcons,
};

export default function SkillBadge({ name, percent, color, icon, index }) {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 min-w-[100px]"
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

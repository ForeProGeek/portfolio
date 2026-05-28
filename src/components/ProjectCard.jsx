import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-surface rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="relative h-56 md:h-64 bg-zinc-900 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="absolute inset-0 flex items-center justify-center bg-zinc-800"
          style={{ display: project.image ? "none" : "flex" }}
        >
          <span className="text-zinc-600 text-sm font-medium">Project Image</span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:bg-zinc-200 transition-colors"
          >
            View Project <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle>My Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { skills } from "../data/skills";
import SkillBadge from "./SkillBadge";

export default function SkillsRibbon() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

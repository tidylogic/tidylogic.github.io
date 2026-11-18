import type { Skill } from "~/data/types";

export function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section className="document-section">
      <h2>기술 스택</h2>
      <dl className="resume-skills">
        {skills.map((skill) => (
          <div key={skill.category}>
            <dt>{skill.category}</dt>
            <dd>{skill.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import type { Education } from "~/data/types";

export function EducationSection({ educations }: { educations: Education[] }) {
  return (
    <section className="document-section">
      <h2>학력</h2>
      <ul className="document-entries">
        {educations.map((education) => (
          <li key={`${education.institution}-${education.period}`}>
            <div className="entry-heading">
              <h3>{education.institution}</h3>
              <p>{education.period}</p>
            </div>
            <p className="entry-role">{[education.major, education.degree].filter(Boolean).join(" / ")}</p>
            {education.description && (
              <p className="entry-description">{education.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

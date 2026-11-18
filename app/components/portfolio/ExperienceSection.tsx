import type { Experience } from "~/data/types";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="document-section">
      <h2>근무 경력</h2>
      <div className="document-entries">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.period}`}>
            <div className="entry-heading">
              <h3>{experience.company}</h3>
              <p>{experience.period}</p>
            </div>
            <p className="entry-role">{experience.position}</p>
            <p className="entry-description">{experience.description}</p>
            {experience.achievements.length > 0 && (
              <ul className="career-work">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

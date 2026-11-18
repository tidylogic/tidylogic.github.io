import { ExperienceSection } from "~/components/portfolio/ExperienceSection";
import { portfolioData } from "~/data/portfolio";

const { profile, experiences, projects } = portfolioData;

export function meta() {
  return [
    { title: `경력기술서 | ${profile.name}` },
    { name: "description", content: `${profile.name}의 프로젝트별 담당 업무와 경력입니다.` },
  ];
}

export default function Career() {
  return (
    <div className="document-page">
      <header className="document-header">
        <h1>경력기술서</h1>
        <p>{profile.name} / {profile.title}</p>
      </header>
      <ExperienceSection experiences={experiences} />
      <section className="document-section" aria-labelledby="career-projects">
        <h2 id="career-projects">프로젝트</h2>
        <div className="document-entries">
          {projects.map((project) => (
            <article id={project.id} key={project.id} className="career-project">
              <div className="entry-heading">
                <h3>{project.link ? <a href={project.link}>{project.name}</a> : project.name}</h3>
                <p>{project.period}</p>
              </div>
              <p className="entry-role">{project.role}</p>
              <p className="entry-description">{project.description}</p>
              {project.achievements.length > 0 && (
                <ul className="career-work">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <dl className="career-stack">
                <dt>사용 기술</dt>
                <dd>{project.techStack.join(", ")}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

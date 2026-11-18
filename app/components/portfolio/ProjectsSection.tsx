import { Link } from "react-router";
import type { Project } from "~/data/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="document-section">
      <h2>프로젝트</h2>
      <ul className="document-entries">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="entry-heading">
              <h3><Link to={`/career#${project.id}`}>{project.name}</Link></h3>
              <p>{project.period}</p>
            </div>
            <p className="entry-description">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

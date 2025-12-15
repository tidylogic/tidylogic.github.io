import type { Project } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * 프로젝트 섹션
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">프로젝트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className="p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {project.name} ↗
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                    <p className="text-sm text-primary">{project.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


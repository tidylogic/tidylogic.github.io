import type { Experience } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface ExperienceSectionProps {
  experiences: Experience[];
}

/**
 * 경력 섹션
 */
export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">경력</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative pl-4 border-l-2 border-primary/30 pb-4 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-foreground">{exp.company}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.position}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


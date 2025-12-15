import type { Education } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface EducationSectionProps {
  educations: Education[];
}

/**
 * 학력 섹션
 */
export function EducationSection({ educations }: EducationSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">학력</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {educations.map((edu, index) => (
              <div
                key={`${edu.institution}-${index}`}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b last:border-0 last:pb-0"
              >
                <div>
                  <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                  {edu.major && (
                    <p className="text-sm text-primary">
                      {edu.major} {edu.degree && `/ ${edu.degree}`}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


import type { Skill } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * 기술 스택 섹션
 */
export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">기술 스택</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


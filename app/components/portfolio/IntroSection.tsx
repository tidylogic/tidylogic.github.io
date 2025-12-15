import type { Introduction } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface IntroSectionProps {
  introduction: Introduction;
}

/**
 * 자기소개 섹션
 */
export function IntroSection({ introduction }: IntroSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">자기소개</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium text-primary">{introduction.summary}</p>
          <div className="text-muted-foreground whitespace-pre-line">
            {introduction.description}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


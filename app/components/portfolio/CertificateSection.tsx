import type { Certificate } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface CertificateSectionProps {
  certificates: Certificate[];
}

/**
 * 자격증 섹션
 */
export function CertificateSection({ certificates }: CertificateSectionProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">자격증</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="p-3 rounded-lg border bg-card"
              >
                <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>취득: {cert.date}</span>
                  {cert.expiry && <span>· 만료: {cert.expiry}</span>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


/**
 * 인쇄용 이력서 페이지
 * A4 세로 용지에 최적화된 레이아웃
 */

import { PrintLayout } from "~/layouts";
import { ProfileSection } from "~/components/portfolio/ProfileSection";
import { portfolioData } from "~/data/portfolio";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

export function meta() {
  return [
    { title: `인쇄용 이력서 | ${portfolioData.profile.name}` },
    { name: "description", content: `${portfolioData.profile.name}의 인쇄용 이력서입니다.` },
  ];
}

export default function PrintResume() {
  const { profile, introduction, contact, skills, experiences, projects, educations, certificates } =
    portfolioData;

  return (
    <PrintLayout>
      <div className="print-page space-y-6 px-5 py-7 text-sm sm:p-8">
        {/* 기본 정보 + 연락처 (헤더 영역) */}
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
          <ProfileSection profile={profile} />
          <div className="space-y-1 text-xs sm:text-right">
            <p className="font-medium">{contact.email}</p>
            {contact.phone && <p>{contact.phone}</p>}
            {contact.github && <p>{contact.github.replace("https://", "")}</p>}
            {contact.blog && <p>{contact.blog.replace("https://", "")}</p>}
            {contact.linkedin && <p>{contact.linkedin.replace("https://", "")}</p>}
            {contact.website && <p>{contact.website.replace("https://", "")}</p>}
          </div>
        </header>

        {/* 자기소개 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-2">자기소개</h2>
          <p className="font-semibold text-foreground mb-2">{introduction.summary}</p>
          <p className="text-muted-foreground whitespace-pre-line text-xs leading-relaxed">
            {introduction.description}
          </p>
        </section>

        <Separator />

        {/* 기술 스택 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">기술 스택</h2>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="font-semibold text-foreground mb-1">{skill.category}</p>
                <div className="flex flex-wrap gap-1">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 경력 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">경력</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-primary">{exp.position}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="ml-2 list-inside list-disc space-y-0.5 text-xs text-muted-foreground">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 프로젝트 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">프로젝트</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="break-inside-avoid">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-foreground">{project.name}</h3>
                    <p className="text-xs text-primary">{project.role}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.period}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-1">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-[10px] py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.achievements.length > 0 && (
                  <ul className="ml-2 list-inside list-disc space-y-0.5 text-xs text-muted-foreground">
                    {project.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {project.link && (
                  <p className="text-xs text-primary mt-1">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 학력 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">학력</h2>
          <div className="space-y-3">
            {educations.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                    {edu.major && (
                      <p className="text-xs text-primary">
                        {edu.major} {edu.degree && `· ${edu.degree}`}
                      </p>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {edu.period}
                  </Badge>
                </div>
                {edu.description && (
                  <p className="text-xs text-muted-foreground">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 자격증 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">자격증</h2>
          <div className="space-y-2">
            {certificates.map((cert, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                    {cert.expiry && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        만료: {cert.expiry}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PrintLayout>
  );
}


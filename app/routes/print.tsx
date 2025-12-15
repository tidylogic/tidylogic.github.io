/**
 * 인쇄용 포트폴리오 페이지
 * A4 세로 용지에 최적화된 레이아웃
 */

import { PrintLayout } from "~/layouts";
import { portfolioData } from "~/data/portfolio";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

export function meta() {
  return [
    { title: `${portfolioData.profile.name} | ${portfolioData.profile.title} (인쇄용)` },
    { name: "description", content: `${portfolioData.profile.name}의 포트폴리오입니다.` },
  ];
}

export default function PrintPortfolio() {
  const { profile, introduction, contact, skills, experiences, projects, educations, certificates } =
    portfolioData;

  return (
    <PrintLayout>
      <div className="print-page p-8 space-y-6 text-sm">
        {/* 기본 정보 + 연락처 (헤더 영역) */}
        <header className="flex items-start justify-between border-b-2 border-primary pb-4">
          <div className="flex items-center gap-4">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-24 w-24 rounded-full object-cover border-2 border-primary"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                {profile.name.charAt(0)}
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-foreground">{profile.name}</h1>
              <p className="text-xl text-primary font-medium mt-1">{profile.title}</p>
            </div>
          </div>
          <div className="text-right text-xs space-y-1">
            <p className="font-medium">📧 {contact.email}</p>
            {contact.phone && <p>📞 {contact.phone}</p>}
            {contact.github && <p>🐙 {contact.github.replace("https://", "")}</p>}
            {contact.blog && <p>📝 {contact.blog.replace("https://", "")}</p>}
            {contact.linkedin && <p>💼 {contact.linkedin.replace("https://", "")}</p>}
            {contact.website && <p>🌐 {contact.website.replace("https://", "")}</p>}
          </div>
        </header>

        {/* 자기소개 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-2">👋 자기소개</h2>
          <p className="font-semibold text-foreground mb-2">{introduction.summary}</p>
          <p className="text-muted-foreground whitespace-pre-line text-xs leading-relaxed">
            {introduction.description}
          </p>
        </section>

        <Separator />

        {/* 기술 스택 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">🛠️ 기술 스택</h2>
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
          <h2 className="text-lg font-bold text-primary mb-3">💼 경력</h2>
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
                <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground ml-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 프로젝트 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">🚀 프로젝트</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid">
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
                <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground ml-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
                {project.link && (
                  <p className="text-xs text-primary mt-1">🔗 {project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 교육 */}
        <section className="print-section">
          <h2 className="text-lg font-bold text-primary mb-3">🎓 교육</h2>
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
          <h2 className="text-lg font-bold text-primary mb-3">📜 자격증</h2>
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


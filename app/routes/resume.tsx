import { Link } from "react-router";
import { portfolioData } from "~/data/portfolio";
import {
  ProfileSection,
  IntroSection,
  ContactSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  CertificateSection,
} from "~/components/portfolio";

export function meta() {
  return [
    { title: `이력서 | ${portfolioData.profile.name}` },
    { name: "description", content: `${portfolioData.profile.name}의 이력서입니다.` },
  ];
}

export default function Resume() {
  return (
    <div className="document-page">
      <header className="document-header resume-header">
        <ProfileSection profile={portfolioData.profile} />
        <Link className="document-action print:hidden" to="/print">인쇄용 이력서</Link>
      </header>
      <IntroSection introduction={portfolioData.introduction} />
      <ContactSection contact={portfolioData.contact} />
      <ExperienceSection experiences={portfolioData.experiences} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <EducationSection educations={portfolioData.educations} />
      <CertificateSection certificates={portfolioData.certificates} />
    </div>
  );
}

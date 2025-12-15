/**
 * PC용 포트폴리오 페이지
 * 웹 브라우저에서 보기 좋은 레이아웃
 */

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
import { WebLayout } from "~/layouts";

export function meta() {
  return [
    { title: `${portfolioData.profile.name} | ${portfolioData.profile.title}` },
    { name: "description", content: `${portfolioData.profile.name}의 포트폴리오입니다.` },
  ];
}

export default function Portfolio() {
  return (
    <WebLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 기본 정보 */}
        <ProfileSection profile={portfolioData.profile} />

        {/* 자기소개 */}
        <IntroSection introduction={portfolioData.introduction} />

        {/* 연락처 */}
        <ContactSection contact={portfolioData.contact} />

        {/* 기술 스택 */}
        <SkillsSection skills={portfolioData.skills} />

        {/* 경력 */}
        <ExperienceSection experiences={portfolioData.experiences} />

        {/* 프로젝트 */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* 학력 */}
        <EducationSection educations={portfolioData.educations} />

        {/* 자격증 */}
        <CertificateSection certificates={portfolioData.certificates} />
      </div>
    </WebLayout>
  );
}

/**
 * 포트폴리오 데이터 타입 정의
 * 이 파일에서 정의된 타입은 PC용/인쇄용 모든 레이아웃에서 공통으로 사용됩니다.
 */

// 기본 정보
export interface Profile {
  name: string;
  title: string; // 직함 (예: "백엔드 개발자")
  photo?: string; // 프로필 사진 URL (선택)
}

// 자기소개
export interface Introduction {
  summary: string; // 한 줄 소개
  description: string; // 상세 소개
}

// 연락처
export interface Contact {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  blog?: string;
  website?: string;
}

// 기술 스택
export interface Skill {
  category: string; // 카테고리 (예: "Backend", "Database", "DevOps")
  items: string[]; // 기술 목록
}

// 경력
export interface Experience {
  company: string;
  position: string;
  period: string; // 예: "2020.01 - 현재"
  description: string;
  achievements: string[]; // 주요 성과
}

// 프로젝트
export interface Project {
  name: string;
  period: string;
  description: string;
  role: string; // 담당 역할
  techStack: string[]; // 사용 기술
  achievements: string[]; // 주요 성과
  link?: string; // 프로젝트 링크 (선택)
}

// 교육
export interface Education {
  institution: string; // 학교/기관명
  major?: string; // 전공
  degree?: string; // 학위
  period: string;
  description?: string;
}

// 자격증
export interface Certificate {
  name: string;
  issuer: string; // 발급 기관
  date: string; // 취득일
  expiry?: string; // 만료일 (선택)
}

// 전체 포트폴리오 데이터
export interface PortfolioData {
  profile: Profile;
  introduction: Introduction;
  contact: Contact;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  educations: Education[];
  certificates: Certificate[];
}

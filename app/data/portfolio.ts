import type { PortfolioData } from "./types";

/**
 * 포트폴리오 데이터
 * 이 파일의 내용을 수정하면 PC용/인쇄용 모든 버전에 자동으로 반영됩니다.
 */
export const portfolioData: PortfolioData = {
  // 기본 정보
  profile: {
    name: "홍길동",
    title: "백엔드 개발자",
    photo: undefined, // 프로필 사진 URL을 넣으세요
  },

  // 자기소개
  introduction: {
    summary: "안정적이고 확장 가능한 서버 시스템을 설계하는 백엔드 개발자입니다.",
    description: `5년차 백엔드 개발자로서, 대규모 트래픽 처리와 MSA 아키텍처 설계 경험이 있습니다.
    
클린 코드와 테스트 주도 개발을 지향하며, 팀과의 협업을 통해 더 나은 서비스를 만들어가는 것을 좋아합니다.

새로운 기술을 배우는 것을 즐기며, 기술 블로그를 통해 지식을 공유하고 있습니다.`,
  },

  // 연락처
  contact: {
    email: "gildong.hong@email.com",
    phone: "010-1234-5678",
    github: "https://github.com/gildong",
    linkedin: "https://linkedin.com/in/gildong",
    blog: "https://gildong.dev",
  },

  // 기술 스택
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Kotlin", "Node.js", "Python"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins"],
    },
    {
      category: "Tools",
      items: ["Git", "IntelliJ IDEA", "Jira", "Confluence", "Slack"],
    },
  ],

  // 경력
  experiences: [
    {
      company: "(주)테크스타트",
      position: "백엔드 개발자 / 팀 리드",
      period: "2022.03 - 현재",
      description: "이커머스 플랫폼 백엔드 개발 및 팀 리딩",
      achievements: [
        "MSA 아키텍처로 전환하여 시스템 안정성 30% 향상",
        "주문 처리 시스템 최적화로 응답 시간 50% 단축",
        "5명 규모의 백엔드 팀 리딩 및 코드 리뷰 프로세스 정립",
        "CI/CD 파이프라인 구축으로 배포 시간 70% 단축",
      ],
    },
    {
      company: "(주)웹서비스",
      position: "백엔드 개발자",
      period: "2020.01 - 2022.02",
      description: "B2B SaaS 플랫폼 개발",
      achievements: [
        "RESTful API 설계 및 개발 (50+ endpoints)",
        "실시간 데이터 동기화 시스템 구축",
        "데이터베이스 쿼리 최적화로 성능 40% 개선",
      ],
    },
  ],

  // 프로젝트
  projects: [
    {
      name: "실시간 주문 처리 시스템",
      period: "2023.06 - 2023.12",
      description: "하루 100만 건 이상의 주문을 처리하는 실시간 시스템 개발",
      role: "백엔드 리드 개발자",
      techStack: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "Kubernetes"],
      achievements: [
        "Kafka 기반 이벤트 드리븐 아키텍처 설계",
        "Redis 캐싱으로 DB 부하 60% 감소",
        "무중단 배포 환경 구축",
      ],
      link: "https://github.com/gildong/order-system",
    },
    {
      name: "통합 인증 시스템 (SSO)",
      period: "2022.09 - 2023.02",
      description: "사내 서비스 통합을 위한 SSO 시스템 개발",
      role: "메인 개발자",
      techStack: ["Spring Security", "OAuth 2.0", "JWT", "MySQL"],
      achievements: [
        "OAuth 2.0 기반 SSO 시스템 설계 및 구현",
        "보안 취약점 0건 달성 (외부 보안 감사)",
        "10개 서비스 통합 인증 적용",
      ],
    },
    {
      name: "API Gateway 개발",
      period: "2021.06 - 2021.12",
      description: "MSA 환경을 위한 API Gateway 개발",
      role: "개발자",
      techStack: ["Spring Cloud Gateway", "Redis", "Docker"],
      achievements: [
        "Rate Limiting 및 Circuit Breaker 구현",
        "요청 로깅 및 모니터링 시스템 연동",
      ],
    },
  ],

  // 교육
  educations: [
    {
      institution: "한국대학교",
      major: "컴퓨터공학과",
      degree: "학사",
      period: "2014.03 - 2020.02",
      description: "소프트웨어 공학, 데이터베이스, 알고리즘 수강",
    },
    {
      institution: "우아한테크캠프",
      period: "2019.07 - 2019.08",
      description: "웹 백엔드 과정 수료",
    },
  ],

  // 자격증
  certificates: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023.05",
      expiry: "2026.05",
    },
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2019.11",
    },
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2019.06",
    },
  ],
};


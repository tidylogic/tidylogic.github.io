import type {PortfolioData} from "./types";

/**
 * 포트폴리오 데이터
 * 이 파일의 내용을 수정하면 PC용/인쇄용 모든 버전에 자동으로 반영됩니다.
 */
export const portfolioData: PortfolioData = {
    // 기본 정보
    profile: {
        name: "김중엽",
        title: "백엔드 개발자",
        photo: undefined, // 프로필 사진 URL을 넣으세요
    },

    // 자기소개
    introduction: {
        summary: "안정적이고 확장 가능한 서버 시스템을 설계하는 백엔드 개발자입니다.",
        description: `3년차 백엔드 개발자로서, 대규모 트래픽 처리와 모노레포 아키텍처 설계 경험이 있습니다.
    
클린 코드와 테스트 주도 개발을 지향하며, 팀과의 협업을 통해 더 나은 서비스를 만들어가는 것을 좋아합니다.

새로운 기술을 배우는 것을 즐깁니다.`,
    },

    // 연락처
    contact: {
        email: "wndduq0000@gmail.com",
        github: "https://github.com/tidylogic",
    },

    // 기술 스택
    skills: [
        {
            category: "Backend",
            items: ["Golang", "Echo Framework", "Kotlin", "Node.js", "Python"],
        },
        {
            category: "Database",
            items: ["PostgreSQL", "MongoDB", "Qdrant", "Redis"],
        },
        {
            category: "DevOps",
            items: ["Docker", "AWS", "GitHub Actions"],
        },
        {
            category: "Tools",
            items: ["Github", "Goland", "IntelliJ IDEA", "Jira", "Notion", "Slack"],
        },
    ],

    // 경력
    experiences: [
        {
            company: "(주)룩코",
            position: "백엔드 개발자",
            period: "2022.10 - 재직 중(3년 3개월)",
            description: "글로벌 AI 디지털 옷장 서비스, B2B 의류 판매 서비스, 빈티지 거래 서비스 백엔드 개발",
            achievements: [
                "TODO",
                // "MSA 아키텍처로 전환하여 시스템 안정성 30% 향상",
                // "주문 처리 시스템 최적화로 응답 시간 50% 단축",
                // "5명 규모의 백엔드 팀 리딩 및 코드 리뷰 프로세스 정립",
                // "CI/CD 파이프라인 구축으로 배포 시간 70% 단축",
            ],
        },
    ],

    // 프로젝트
    projects: [
        {
            name: "TODO",
            period: "20xx.xx - 20xx.xx",
            description: "TODO",
            role: "백엔드 개발자",
            techStack: ["TODO"],
            achievements: [
                "TODO",
            ],
        },
        {
            name: "에이클로젯",
            period: "2022.11 - 진행 중",
            description: "글로벌 AI 디지털 옷장 서비스 백엔드 개발",
            role: "백엔드 개발자",
            techStack: ["Golang", "Echo Framework", "PostgreSQL", "Qdrant", "AWS"],
            achievements: [
                "Qdrant 벡터 DB를 활용한 유사 이미지 검색 시스템 구축",
                "대규모 이미지 데이터 처리를 위한 비동기 작업 큐 시스템 설계 및 구현",
                "Github Actions CI/CD 파이프라인 구축으로 배포 자동화",
            ],
        },
        {
            name: "Looko-AI",
            period: "2023.03 - 2023.11",
            description: "하루 2만 건 이상의 주문을 처리하는 실시간 시스템 개발",
            role: "백엔드 개발자",
            techStack: ["Golang", "Echo Framework", "MongoDB", "RabbitMQ", "AWS"],
            achievements: [
                "카페24, 네이버 스마트스토어, 번개 장터 등 3개 플랫폼과의 실시간 연동 시스템 구축",
                "RabbitMQ를 사용하여 플랫폼 별 주문 처리 시스템 설계",
                "빠른 DB 구조 변화에 대응하기 위해 MongoDB를 선택하여 유연한 데이터 모델링 구현",
            ],
        },
        {
            name: "SecondSold",
            period: "2023.03 - 2023.11",
            description: "빈티지 의류 거래 플랫폼의 백엔드 시스템 개발",
            role: "백엔드 개발자",
            techStack: ["Golang", "Echo Framework", "PostgreSQL", "Elastic Search", "AWS"],
            achievements: [

            ],
        },
    ],

    // 학력
    educations: [
        {
            institution: "세명컴퓨터고등학교",
            major: "게임소프트웨어과",
            period: "2020.03 - 2023.01 졸업",
            description: "기초 CS 지식, 게임 클라이언트, 웹 프로그래밍",
        },
    ],

    // 자격증
    certificates: [
        {
            name: "정보처리기능사",
            issuer: "한국산업인력공단",
            date: "2022.07",
        },
        {
            name: "정보처리산업기사",
            issuer: "한국산업인력공단",
            date: "2022.09",
        },
    ],
};


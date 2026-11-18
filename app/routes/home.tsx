import { Link } from "react-router";
import { portfolioData } from "~/data/portfolio";

const { profile, contact, projects } = portfolioData;

export function meta() {
  return [
    { title: `${profile.name} | ${profile.title}` },
    { name: "description", content: `${profile.title} ${profile.name}의 소개와 참여 프로젝트입니다.` },
  ];
}

export default function Home() {
  return (
    <>
      <div className="home-intro">
        <section aria-labelledby="home-name">
          <h1 className="home-name" id="home-name">{profile.name}</h1>
          <p className="home-role">{profile.title}</p>
          <p className="home-summary">
            Go로 서비스 백엔드를 개발합니다. 이미지 검색, 비동기 이미지 처리,
            쇼핑몰 주문 연동 시스템을 다뤘습니다.
          </p>
          <div className="home-contact">
            <a href={`mailto:${contact.email}`}>이메일</a>
            {contact.github && <a href={contact.github}>GitHub</a>}
          </div>
        </section>
        <section className="home-projects" aria-labelledby="home-projects-title">
          <h2 id="home-projects-title">참여 프로젝트</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Link to={`/career#${project.id}`}>
                  <strong>{project.name}</strong>
                  <span>{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <nav className="home-documents" aria-label="문서 바로가기">
        <Link to="/resume">
          <strong>이력서</strong>
          <span>경력 요약, 기술 스택, 학력 및 자격증</span>
        </Link>
        <Link to="/career">
          <strong>경력기술서</strong>
          <span>프로젝트별 담당 업무와 사용 기술</span>
        </Link>
      </nav>
    </>
  );
}

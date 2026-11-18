import { Link, NavLink, Outlet } from "react-router";
import { portfolioData } from "~/data/portfolio";

export default function WebLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-container site-header-inner">
          <Link className="site-name" to="/">{portfolioData.profile.name}</Link>
          <nav className="site-nav" aria-label="주 메뉴">
            <NavLink to="/" end>홈</NavLink>
            <NavLink to="/resume">이력서</NavLink>
            <NavLink to="/career">경력기술서</NavLink>
          </nav>
        </div>
      </header>
      <main className="site-container">
        <Outlet />
      </main>
    </div>
  );
}

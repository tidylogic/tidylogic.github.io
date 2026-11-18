import type { ReactNode } from "react";
import { Link } from "react-router";

interface PrintLayoutProps {
  children: ReactNode;
}

/**
 * 인쇄용 A4 레이아웃
 * A4 세로 규격에 최적화된 레이아웃
 */
export function PrintLayout({ children }: PrintLayoutProps) {
  return (
    <div className="print-layout">
      <header className="site-header print:hidden">
        <div className="site-container site-header-inner">
          <Link to="/resume" className="site-name">이력서로 돌아가기</Link>
          <button className="document-action" type="button" onClick={() => window.print()}>
            인쇄하기
          </button>
        </div>
      </header>
      <main className="print-container">{children}</main>
    </div>
  );
}


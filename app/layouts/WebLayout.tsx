import { Link, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import type { ReactNode } from "react";

interface WebLayoutProps {
  children: ReactNode;
}

/**
 * PC용 웹 레이아웃
 * 네비게이션 바와 푸터를 포함한 레이아웃
 */
export function WebLayout({ children }: WebLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 / 네비게이션 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="font-bold text-lg text-primary">
            Portfolio
          </Link>
          <nav className="flex items-center gap-2">
            <Link to="/print">
              <Button variant="outline" size="sm">
                🖨️ 인쇄용 보기
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


import type { ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

interface PrintLayoutProps {
  children: ReactNode;
}

/**
 * 인쇄용 A4 레이아웃
 * A4 세로 규격에 최적화된 레이아웃
 */
export function PrintLayout({ children }: PrintLayoutProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-layout">
      {/* 인쇄 시 숨겨지는 헤더 */}
      <header className="print:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="font-bold text-lg text-primary">
            Portfolio
          </Link>
          <div className="flex items-center gap-10">
            <Button onClick={handlePrint} size="sm">
              🖨️ 인쇄하기
            </Button>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← 웹 버전으로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      {/* A4 페이지 컨테이너 */}
      <div className="print-container mx-auto bg-white">
        {children}
      </div>
    </div>
  );
}


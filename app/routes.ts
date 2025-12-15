import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/portfolio.tsx"),           // PC용 포트폴리오 (메인 페이지)
  route("print", "routes/portfolio-print.tsx"),      // 인쇄용 포트폴리오
] satisfies RouteConfig;

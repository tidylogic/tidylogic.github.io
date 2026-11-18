import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/WebLayout.tsx", [
    index("routes/home.tsx"),
    route("resume", "routes/resume.tsx"),
    route("career", "routes/career.tsx"),
  ]),
  route("print", "routes/resume-print.tsx"),
] satisfies RouteConfig;

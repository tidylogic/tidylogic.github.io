import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useLocation, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { Slot, Separator as Separator$1 } from "radix-ui";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const portfolioData = {
  // 기본 정보
  profile: {
    name: "김중엽",
    title: "백엔드 개발자",
    photo: void 0
    // 프로필 사진 URL을 넣으세요
  },
  // 자기소개
  introduction: {
    summary: "안정적이고 확장 가능한 서버 시스템을 설계하는 백엔드 개발자입니다.",
    description: `3년차 백엔드 개발자로서, 대규모 트래픽 처리와 모노레포 아키텍처 설계 경험이 있습니다.
    
클린 코드와 테스트 주도 개발을 지향하며, 팀과의 협업을 통해 더 나은 서비스를 만들어가는 것을 좋아합니다.

새로운 기술을 배우는 것을 즐깁니다.`
  },
  // 연락처
  contact: {
    email: "wndduq0000@email.com",
    phone: "010-5364-7708",
    github: "https://github.com/tidylogic"
    // linkedin: "https://linkedin.com/in/gildong",
    // blog: "https://gildong.dev",
  },
  // 기술 스택
  skills: [
    {
      category: "Backend",
      items: ["Golang", "Echo Framework", "Kotlin", "Node.js", "Python"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Qdrant", "Redis"]
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "GitHub Actions"]
    },
    {
      category: "Tools",
      items: ["Github", "Goland", "IntelliJ IDEA", "Jira", "Notion", "Slack"]
    }
  ],
  // 경력
  experiences: [
    {
      company: "(주)룩코",
      position: "백엔드 개발자",
      period: "2022.10 - 현재",
      description: "글로벌 AI 디지털 옷장 서비스, B2B 의류 판매 서비스, 빈티지 거래 서비스 백엔드 개발",
      achievements: [
        "TODO"
        // "MSA 아키텍처로 전환하여 시스템 안정성 30% 향상",
        // "주문 처리 시스템 최적화로 응답 시간 50% 단축",
        // "5명 규모의 백엔드 팀 리딩 및 코드 리뷰 프로세스 정립",
        // "CI/CD 파이프라인 구축으로 배포 시간 70% 단축",
      ]
    }
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
        "TODO"
      ]
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
        "Github Actions CI/CD 파이프라인 구축으로 배포 자동화"
      ]
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
        "빠른 DB 구조 변화에 대응하기 위해 MongoDB를 선택하여 유연한 데이터 모델링 구현"
      ]
    },
    {
      name: "SecondSold",
      period: "2023.03 - 2023.11",
      description: "빈티지 의류 거래 플랫폼의 백엔드 시스템 개발",
      role: "백엔드 개발자",
      techStack: ["Golang", "Echo Framework", "PostgreSQL", "Elastic Search", "AWS"],
      achievements: []
    }
  ],
  // 교육
  educations: [
    {
      institution: "세명컴퓨터고등학교",
      major: "게임소프트웨어과",
      period: "2020.03 - 2023.01",
      description: "기초 CS 지식, 게임 클라이언트, 웹 프로그래밍"
    }
  ],
  // 자격증
  certificates: [
    {
      name: "정보처리기능사",
      issuer: "한국산업인력공단",
      date: "2022.07"
    },
    {
      name: "정보처리산업기사",
      issuer: "한국산업인력공단",
      date: "2022.09"
    }
  ]
};
function ProfileSection({ profile }) {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center gap-4 sm:flex-row sm:items-start", children: [
    profile.photo ? /* @__PURE__ */ jsx(
      "img",
      {
        src: profile.photo,
        alt: `${profile.name} 프로필 사진`,
        className: "h-32 w-32 rounded-full object-cover border-4 border-primary/20"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary", children: profile.name.charAt(0) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", children: profile.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary font-medium mt-1", children: profile.title })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn("ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", className),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6 group-data-[size=sm]/card:px-4", className),
      ...props
    }
  );
}
function IntroSection({ introduction }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "자기소개" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-primary", children: introduction.summary }),
      /* @__PURE__ */ jsx("div", { className: "text-muted-foreground whitespace-pre-line", children: introduction.description })
    ] })
  ] }) });
}
function ContactSection({ contact }) {
  const contactItems = [
    { label: "이메일", value: contact.email, href: `mailto:${contact.email}`, icon: "✉️" },
    { label: "전화번호", value: contact.phone, href: `tel:${contact.phone}`, icon: "📞" },
    { label: "GitHub", value: contact.github, href: contact.github, icon: "🐙" },
    { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin, icon: "💼" },
    { label: "블로그", value: contact.blog, href: contact.blog, icon: "📝" },
    { label: "웹사이트", value: contact.website, href: contact.website, icon: "🌐" }
  ].filter((item) => item.value);
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "연락처" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: contactItems.map((item) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: item.href,
        target: item.href?.startsWith("http") ? "_blank" : void 0,
        rel: item.href?.startsWith("http") ? "noopener noreferrer" : void 0,
        className: "flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: item.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: item.label }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground break-all", children: item.value?.replace("https://", "").replace("http://", "") })
          ] })
        ]
      },
      item.label
    )) }) })
  ] }) });
}
const badgeVariants = cva(
  "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function SkillsSection({ skills }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "기술 스택" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: skills.map((skill) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-muted-foreground mb-2", children: skill.category }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skill.items.map((item) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: item }, item)) })
    ] }, skill.category)) }) })
  ] }) });
}
function ExperienceSection({ experiences }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "경력" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: experiences.map((exp, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative pl-4 border-l-2 border-primary/30 pb-4 last:pb-0",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground", children: exp.company }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: exp.period })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: exp.position }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: exp.description }),
            exp.achievements.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2", children: exp.achievements.map((achievement, i) => /* @__PURE__ */ jsx("li", { children: achievement }, i)) })
          ] })
        ]
      },
      `${exp.company}-${index}`
    )) }) })
  ] }) });
}
function ProjectsSection({ projects }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "프로젝트" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground", children: project.link ? /* @__PURE__ */ jsxs(
                "a",
                {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-primary transition-colors",
                  children: [
                    project.name,
                    " ↗"
                  ]
                }
              ) : project.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary", children: project.role })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: project.period })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: project.description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: project.techStack.map((tech) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, tech)) }),
          project.achievements.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-sm text-muted-foreground space-y-1", children: project.achievements.map((achievement, i) => /* @__PURE__ */ jsx("li", { children: achievement }, i)) })
        ]
      },
      `${project.name}-${index}`
    )) }) })
  ] }) });
}
function EducationSection({ educations }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "교육" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: educations.map((edu, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b last:border-0 last:pb-0",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground", children: edu.institution }),
            edu.major && /* @__PURE__ */ jsxs("p", { className: "text-sm text-primary", children: [
              edu.major,
              " ",
              edu.degree && `/ ${edu.degree}`
            ] }),
            edu.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: edu.description })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: edu.period })
        ]
      },
      `${edu.institution}-${index}`
    )) }) })
  ] }) });
}
function CertificateSection({ certificates }) {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "자격증" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: certificates.map((cert, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-3 rounded-lg border bg-card",
        children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground text-sm", children: cert.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: cert.issuer }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "취득: ",
              cert.date
            ] }),
            cert.expiry && /* @__PURE__ */ jsxs("span", { children: [
              "· 만료: ",
              cert.expiry
            ] })
          ] })
        ]
      },
      `${cert.name}-${index}`
    )) }) })
  ] }) });
}
const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function WebLayout({ children }) {
  useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-14 items-center justify-between px-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "font-bold text-lg text-primary", children: "Portfolio" }),
      /* @__PURE__ */ jsx("nav", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(Link, { to: "/print", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "🖨️ 인쇄용 보기" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 container mx-auto px-4 py-8", children }),
    /* @__PURE__ */ jsx("footer", { className: "border-t py-6", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Portfolio. All rights reserved."
    ] }) })
  ] });
}
function PrintLayout({ children }) {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs("div", { className: "print-layout", children: [
    /* @__PURE__ */ jsx("div", { className: "print:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-14 items-center justify-between px-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "← 웹 버전으로 돌아가기" }),
      /* @__PURE__ */ jsx(Button, { onClick: handlePrint, size: "sm", children: "🖨️ 인쇄하기" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "print-container mx-auto bg-white", children })
  ] });
}
function meta$1() {
  return [{
    title: `${portfolioData.profile.name} | ${portfolioData.profile.title}`
  }, {
    name: "description",
    content: `${portfolioData.profile.name}의 포트폴리오입니다.`
  }];
}
const portfolio = UNSAFE_withComponentProps(function Portfolio() {
  return /* @__PURE__ */ jsx(WebLayout, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-4xl mx-auto space-y-8",
      children: [/* @__PURE__ */ jsx(ProfileSection, {
        profile: portfolioData.profile
      }), /* @__PURE__ */ jsx(IntroSection, {
        introduction: portfolioData.introduction
      }), /* @__PURE__ */ jsx(ContactSection, {
        contact: portfolioData.contact
      }), /* @__PURE__ */ jsx(SkillsSection, {
        skills: portfolioData.skills
      }), /* @__PURE__ */ jsx(ExperienceSection, {
        experiences: portfolioData.experiences
      }), /* @__PURE__ */ jsx(ProjectsSection, {
        projects: portfolioData.projects
      }), /* @__PURE__ */ jsx(EducationSection, {
        educations: portfolioData.educations
      }), /* @__PURE__ */ jsx(CertificateSection, {
        certificates: portfolioData.certificates
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: portfolio,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      ),
      ...props
    }
  );
}
function meta() {
  return [{
    title: `${portfolioData.profile.name} | ${portfolioData.profile.title} (인쇄용)`
  }, {
    name: "description",
    content: `${portfolioData.profile.name}의 포트폴리오입니다.`
  }];
}
const print = UNSAFE_withComponentProps(function PrintPortfolio() {
  const {
    profile,
    introduction,
    contact,
    skills,
    experiences,
    projects,
    educations,
    certificates
  } = portfolioData;
  return /* @__PURE__ */ jsx(PrintLayout, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "print-page p-8 space-y-6 text-sm",
      children: [/* @__PURE__ */ jsxs("header", {
        className: "flex items-start justify-between border-b-2 border-primary pb-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-4",
          children: [profile.photo ? /* @__PURE__ */ jsx("img", {
            src: profile.photo,
            alt: profile.name,
            className: "h-24 w-24 rounded-full object-cover border-2 border-primary"
          }) : /* @__PURE__ */ jsx("div", {
            className: "h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary",
            children: profile.name.charAt(0)
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h1", {
              className: "text-3xl font-bold text-foreground",
              children: profile.name
            }), /* @__PURE__ */ jsx("p", {
              className: "text-xl text-primary font-medium mt-1",
              children: profile.title
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-right text-xs space-y-1",
          children: [/* @__PURE__ */ jsxs("p", {
            className: "font-medium",
            children: ["📧 ", contact.email]
          }), contact.phone && /* @__PURE__ */ jsxs("p", {
            children: ["📞 ", contact.phone]
          }), contact.github && /* @__PURE__ */ jsxs("p", {
            children: ["🐙 ", contact.github.replace("https://", "")]
          }), contact.blog && /* @__PURE__ */ jsxs("p", {
            children: ["📝 ", contact.blog.replace("https://", "")]
          }), contact.linkedin && /* @__PURE__ */ jsxs("p", {
            children: ["💼 ", contact.linkedin.replace("https://", "")]
          }), contact.website && /* @__PURE__ */ jsxs("p", {
            children: ["🌐 ", contact.website.replace("https://", "")]
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-2",
          children: "👋 자기소개"
        }), /* @__PURE__ */ jsx("p", {
          className: "font-semibold text-foreground mb-2",
          children: introduction.summary
        }), /* @__PURE__ */ jsx("p", {
          className: "text-muted-foreground whitespace-pre-line text-xs leading-relaxed",
          children: introduction.description
        })]
      }), /* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-3",
          children: "🛠️ 기술 스택"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-3",
          children: skills.map((skill, index) => /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("p", {
              className: "font-semibold text-foreground mb-1",
              children: skill.category
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-wrap gap-1",
              children: skill.items.map((item, itemIndex) => /* @__PURE__ */ jsx(Badge, {
                variant: "secondary",
                className: "text-xs",
                children: item
              }, itemIndex))
            })]
          }, index))
        })]
      }), /* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-3",
          children: "💼 경력"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-4",
          children: experiences.map((exp, index) => /* @__PURE__ */ jsxs("div", {
            className: "break-inside-avoid",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between mb-1",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "font-bold text-foreground",
                  children: exp.company
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-sm text-primary",
                  children: exp.position
                })]
              }), /* @__PURE__ */ jsx(Badge, {
                variant: "outline",
                className: "text-xs",
                children: exp.period
              })]
            }), /* @__PURE__ */ jsx("p", {
              className: "text-xs text-muted-foreground mb-1",
              children: exp.description
            }), /* @__PURE__ */ jsx("ul", {
              className: "list-disc list-inside space-y-0.5 text-xs text-muted-foreground ml-2",
              children: exp.achievements.map((achievement, achIndex) => /* @__PURE__ */ jsx("li", {
                children: achievement
              }, achIndex))
            })]
          }, index))
        })]
      }), /* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-3",
          children: "🚀 프로젝트"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-4",
          children: projects.map((project, index) => /* @__PURE__ */ jsxs("div", {
            className: "break-inside-avoid",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between mb-1",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "font-bold text-foreground",
                  children: project.name
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-xs text-primary",
                  children: project.role
                })]
              }), /* @__PURE__ */ jsx(Badge, {
                variant: "outline",
                className: "text-xs",
                children: project.period
              })]
            }), /* @__PURE__ */ jsx("p", {
              className: "text-xs text-muted-foreground mb-1",
              children: project.description
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-wrap gap-1 mb-1",
              children: project.techStack.map((tech, techIndex) => /* @__PURE__ */ jsx(Badge, {
                variant: "secondary",
                className: "text-[10px] py-0",
                children: tech
              }, techIndex))
            }), /* @__PURE__ */ jsx("ul", {
              className: "list-disc list-inside space-y-0.5 text-xs text-muted-foreground ml-2",
              children: project.achievements.map((achievement, achIndex) => /* @__PURE__ */ jsx("li", {
                children: achievement
              }, achIndex))
            }), project.link && /* @__PURE__ */ jsxs("p", {
              className: "text-xs text-primary mt-1",
              children: ["🔗 ", project.link]
            })]
          }, index))
        })]
      }), /* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-3",
          children: "🎓 교육"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-3",
          children: educations.map((edu, index) => /* @__PURE__ */ jsxs("div", {
            className: "break-inside-avoid",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between mb-1",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "font-semibold text-foreground",
                  children: edu.institution
                }), edu.major && /* @__PURE__ */ jsxs("p", {
                  className: "text-xs text-primary",
                  children: [edu.major, " ", edu.degree && `· ${edu.degree}`]
                })]
              }), /* @__PURE__ */ jsx(Badge, {
                variant: "outline",
                className: "text-xs",
                children: edu.period
              })]
            }), edu.description && /* @__PURE__ */ jsx("p", {
              className: "text-xs text-muted-foreground",
              children: edu.description
            })]
          }, index))
        })]
      }), /* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsxs("section", {
        className: "print-section",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-lg font-bold text-primary mb-3",
          children: "📜 자격증"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-2",
          children: certificates.map((cert, index) => /* @__PURE__ */ jsx("div", {
            className: "break-inside-avoid",
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "font-semibold text-foreground text-sm",
                  children: cert.name
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: cert.issuer
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "text-right",
                children: [/* @__PURE__ */ jsx(Badge, {
                  variant: "outline",
                  className: "text-xs",
                  children: cert.date
                }), cert.expiry && /* @__PURE__ */ jsxs("p", {
                  className: "text-[10px] text-muted-foreground mt-1",
                  children: ["만료: ", cert.expiry]
                })]
              })]
            })
          }, index))
        })]
      })]
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: print,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B0TW32ry.js", "imports": ["/assets/chunk-WWGJGFF6-BOKkXrnx.js", "/assets/index-7vuud5lu.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-Bg3263JH.js", "imports": ["/assets/chunk-WWGJGFF6-BOKkXrnx.js", "/assets/index-7vuud5lu.js"], "css": ["/assets/root-BSNQ5gtj.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/portfolio-vPQazxfc.js", "imports": ["/assets/chunk-WWGJGFF6-BOKkXrnx.js", "/assets/button-BhVAcGU6.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/print": { "id": "routes/print", "parentId": "root", "path": "print", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/print-B7tyhhJz.js", "imports": ["/assets/chunk-WWGJGFF6-BOKkXrnx.js", "/assets/button-BhVAcGU6.js", "/assets/index-7vuud5lu.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-5c295d8d.js", "version": "5c295d8d", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/print": {
    id: "routes/print",
    parentId: "root",
    path: "print",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};

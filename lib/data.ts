export const profile = {
  name: "Kaung Sike",
  username: "kaungsike",
  role: "Full Stack Developer",
  bio: "Developer based in Myanmar, building web and mobile applications. I enjoy writing clean, maintainable code and am always learning something new — whether it's Go on the backend or React Native on mobile.",
  github: "https://github.com/kaungsike",
  email: "kaungsike@example.com",
  repos: 36,
};

export type Skill = { name: string };
export type SkillGroup = { category: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Shadcn UI" },
      { name: "Next.js" },
    ],
  },
  {
    category: "Mobile",
    items: [{ name: "React Native" }, { name: "Expo" }],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "ASP.NET" },
      { name: "Go" },
      { name: "REST APIs" },
      { name: "Gin" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Nginx" },
      { name: "Cloudflare" },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveUrl?: string;
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    name: "go-and-gin-rest-api-starter-kit",
    description:
      "Production-ready RESTful API starter kit built with Go and Gin. Includes JWT authentication, role-based access control, and a clean architecture.",
    technologies: ["Go", "Gin", "REST APIs"],
    github: "https://github.com/kaungsike/go-and-gin-rest-api-starter-kit",
  },
  {
    name: "Core 235 Hackathon 2025",
    description:
      "Hackathon project for Core 235 Hackatom 2025, showcasing a landing page built with React, demonstrating modern web development practices and responsive design.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/kaungsike/Hackatom2025",
  },
  {
    name: "React",
    description:
      "React learning repository covering hooks, state management patterns, component composition, and modern React practices.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/kaungsike/React",
  },
  {
    name: "Do-Thing-Deep",
    description:
      "Deep-dive into Laravel Blade templating — exploring PHP web development fundamentals and server-side rendering patterns.",
    technologies: ["PHP", "Laravel"],
    github: "https://github.com/kaungsike/Do-Thing-Deep",
  },
];

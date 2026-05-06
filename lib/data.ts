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
  github?: string;
  demo?: string; 
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    name: "Student Registration System with Dynamic Forms",
    description:
      "University of Computer Studies, Hpa-An student registration system with dynamic forms, built with React, Shadcn UI, and TypeScript.",
    technologies: ["React", "Shadcn UI", "TypeScript"],
    isPrivate: true,
  },
  {
    name: "Core 235 Hackathon 2025",
    description:
      "Hackathon project for Core 235 Hackatom 2025, showcasing a landing page built with React, demonstrating modern web development practices and responsive design.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/kaungsike/Hackatom2025",
    demo: "https://hackatom2025.vercel.app/",

  },
  {
    name: "Project Show Voting System",
    description:
      "Project Show Voting System for University of Computer Studies, Hpa-An, built with React and JavaScript. This system allows students to vote for their favorite projects in a user-friendly interface.The backend api is not active now, so the demo is read-only and can't login or vote.",
    technologies: ["React", "JavaScript"],
    demo: "https://project-show-voting.vercel.app/",
    isPrivate: true,
  },
  {
    name: "Snaekers E-commerce Project",
    description:
      "E-commerce project for sneaker enthusiasts, built with Vite and JavaScript.This project is my javascript practice project, so the code quality is not good.",
    technologies: ["Vite", "JavaScript"],
    github: "https://github.com/kaungsike/sneakers-ecommerce.git",
    demo: "https://sneakers-ecommerce-kaungsike.vercel.app/",
  },
    {
    name: "Invoice Web Application",
    description:
      "My personal invoice web application built with Vite and JavaScript, designed to help freelancers and small businesses manage their invoices efficiently. This project is a practice project for me to learn Vite, so the code quality is not good.",
    technologies: ["Vite", "JavaScript","Tailwind CSS"],
    github: "https://github.com/kaungsike/Invoice-App-Vite.git",
    demo: "https://invoice-app-vite-kaungsike.vercel.app/",
  },
      {
    name: "Qr Code Generator",
    description:
      "A simple QR code generator built with Vite and JavaScript. This project is a practice project for me to learn Vite, so the code quality is not good.",
    technologies: ["JavaScript"],
    github: "https://github.com/kaungsike/QR-Code-Generator-JS-Vite.git",
    demo: "https://qr-code-generator-js-vite-kaungsike.vercel.app/",
  },
];

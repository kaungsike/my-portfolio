export const profile = {
  name: 'Kaung Sike',
  username: 'kaungsike',
  role: 'Full Stack Developer',
  bio: "Developer based in Myanmar, building web and mobile applications. I enjoy writing clean, maintainable code and am always learning something new — whether it's Go on the backend or React Native on mobile.",
  github: 'https://github.com/kaungsike',
  email: 'kaungsike@example.com',
  repos: 36,
}

export type Skill = { name: string; color: string }
export type SkillGroup = { category: string; items: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'HTML / CSS', color: '#E34F26' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Expo', color: '#000020' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Go', color: '#00ADD8' },
      { name: 'Gin', color: '#00ADD8' },
      { name: 'REST APIs', color: '#10B981' },
      { name: 'PHP', color: '#777BB4' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#f0f0f0' },
      { name: 'Laravel', color: '#FF2D20' },
    ],
  },
]

export type Project = {
  name: string
  description: string
  language: string
  langColor: string
  github: string
}

export const projects: Project[] = [
  {
    name: 'go-and-gin-rest-api-starter-kit',
    description:
      'Production-ready RESTful API starter kit built with Go and Gin. Includes JWT authentication, role-based access control, and a clean architecture.',
    language: 'Go',
    langColor: '#00ADD8',
    github: 'https://github.com/kaungsike/go-and-gin-rest-api-starter-kit',
  },
  {
    name: 'learn-react-native',
    description:
      'Hands-on React Native learning with TypeScript — UI components, stack/tab navigation, and Expo integrations.',
    language: 'TypeScript',
    langColor: '#3178C6',
    github: 'https://github.com/kaungsike/learn-react-native',
  },
  {
    name: 'React',
    description:
      'React learning repository covering hooks, state management patterns, component composition, and modern React practices.',
    language: 'JavaScript',
    langColor: '#F7DF1E',
    github: 'https://github.com/kaungsike/React',
  },
  {
    name: 'Do-Thing-Deep',
    description:
      'Deep-dive into Laravel Blade templating — exploring PHP web development fundamentals and server-side rendering patterns.',
    language: 'Blade',
    langColor: '#FF2D20',
    github: 'https://github.com/kaungsike/Do-Thing-Deep',
  },
]

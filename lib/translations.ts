export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for work',
      githubBtn: 'GitHub Profile',
      projectsBtn: 'View Projects',
    },
    about: {
      label: 'About',
      heading: 'Building things that work.',
      p1: "I'm a self-driven developer from Myanmar with a passion for building practical software. I work across the full stack — from Go-powered REST APIs to React and React Native front-ends.",
      p2: "I believe in learning by building. Every project in my GitHub is a step forward, whether it's understanding clean architecture in Go, or exploring TypeScript patterns in React Native.",
      repos: 'Repositories',
      languages: 'Languages',
      timezone: 'Timezone',
    },
    skills: {
      label: 'Skills',
      heading: 'Tech I work with',
    },
    projects: {
      label: 'Projects',
      heading: "Things I've built",
      liveDemo: 'Live Demo',
      repository: 'Repository',
      privateRepo: 'Private Repo',
      viewAll: (count: number) => `View all ${count} repositories on GitHub →`,
    },
    contact: {
      label: 'Contact',
      heading: "Let's work together",
      body: "I'm open to full-time roles, freelance projects, and collaboration. Feel free to reach out.",
      github: 'GitHub',
      githubDesc: 'See my code',
      email: 'Email',
      emailDesc: 'Get in touch',
    },
    footer: {
      rights: (year: number, name: string) => `© ${year} ${name}`,
    },
  },
  mm: {
    nav: {
      about: 'အကြောင်း',
      skills: 'ကျွမ်းကျင်မှု',
      projects: 'စီမံကိန်း',
      contact: 'ဆက်သွယ်ရန်',
    },
    hero: {
      available: 'အလုပ်လက်ခံနေပါသည်',
      githubBtn: 'GitHub ပရိုဖိုင်',
      projectsBtn: 'စီမံကိန်းများကြည့်ရန်',
    },
    about: {
      label: 'အကြောင်း',
      heading: 'အလုပ်ဖြစ်တဲ့ အရာတွေ တည်ဆောက်ခြင်း',
      p1: 'ကျွန်တော်သည် မြန်မာနိုင်ငံမှ developer တစ်ဦးဖြစ်ပြီး Go REST API မှ React နှင့် React Native front-end အထိ full-stack development ပြုလုပ်နေပါသည်။',
      p2: 'တည်ဆောက်ခြင်းဖြင့် လေ့လာခြင်းကို ယုံကြည်ပါသည်။ GitHub ရှိ project တိုင်းသည် Go clean architecture မှ React Native TypeScript patterns အထိ တစ်ဆင့်စီ တိုးတက်မှုဖြစ်သည်။',
      repos: 'Repository များ',
      languages: 'ဘာသာစကားများ',
      timezone: 'အချိန်ဇုန်',
    },
    skills: {
      label: 'ကျွမ်းကျင်မှု',
      heading: 'အသုံးပြုသော နည်းပညာများ',
    },
    projects: {
      label: 'စီမံကိန်းများ',
      heading: 'ကျွန်တော်တည်ဆောက်ခဲ့သောအရာများ',
      liveDemo: 'Live Demo',
      repository: 'Repository',
      privateRepo: 'Private Repo',
      viewAll: (count: number) => `GitHub တွင် repository ${count} ခုအားလုံးကြည့်ရန် →`,
    },
    contact: {
      label: 'ဆက်သွယ်ရန်',
      heading: 'အတူတူ လုပ်ဆောင်ကြရအောင်',
      body: 'Full-time ရာထူးများ၊ freelance project များနှင့် ပူးပေါင်းဆောင်ရွက်မှုများအတွက် ပွင့်လင်းနေပါသည်။',
      github: 'GitHub',
      githubDesc: 'ကုဒ်ကြည့်ရန်',
      email: 'Email',
      emailDesc: 'ဆက်သွယ်ရန်',
    },
    footer: {
      rights: (year: number, name: string) => `© ${year} ${name}`,
    },
  },
} as const

export type Lang = keyof typeof translations

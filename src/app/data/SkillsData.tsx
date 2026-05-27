export type Skill = {
  name: string
  featured: boolean
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillsData = {
  sectionTitle: "Skills & Technologies",
  sectionSubtitle: "Here are the technologies and tools I use to bring ideas to life",
  categories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', featured: true },
        { name: 'TypeScript',      featured: true },
        { name: 'Tailwind CSS',    featured: true },
        { name: 'Vue.js',          featured: false },
        { name: 'HTML / CSS',      featured: false },
        { name: 'Redux',           featured: false },
        { name: 'Vite',            featured: false },
        { name: 'Figma',           featured: false },
        { name: 'Storybook',       featured: false },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js',     featured: true },
        { name: 'Python',      featured: true },
        { name: 'GraphQL',     featured: true },
        { name: 'PostgreSQL',  featured: false },
        { name: 'MongoDB',     featured: false },
        { name: 'REST APIs',   featured: false },
        { name: 'Express.js',  featured: false },
        { name: 'Redis',       featured: false },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', featured: true },
        { name: 'Docker',       featured: true },
        { name: 'AWS',          featured: true },
        { name: 'CI / CD',      featured: false },
        { name: 'Linux',        featured: false },
        { name: 'Jest',         featured: false },
        { name: 'Vercel',       featured: false },
        { name: 'Webpack',      featured: false },
      ],
    },
  ] as SkillCategory[],
}

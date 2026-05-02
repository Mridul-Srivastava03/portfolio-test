// ============================================================
//  All portfolio content lives here.
//  Update this file to change your info — no digging in JSX.
// ============================================================

export const personalInfo = {
  name: 'Kumar Mridul',
  initials: 'KM',
  title: 'Java Backend Engineer · Data Science · B.Tech CSE',
  email: 'mitu1093@gmail.com',
  phone: '+91-8603028924',
  location: 'Kolkata, West Bengal, India',
  linkedin: 'https://linkedin.com/in/mridulks',
  github: 'https://github.com/Mridul-Srivastava03',
  availableForWork: true,
  bio: 'CS & Engineering student specializing in Data Science, with production experience building secure, scalable backend systems. Passionate about distributed systems, software reliability, and engineering at scale.',
};

export const terminalLines = [
  { type: 'kw', text: 'const' },
  { type: 'plain', text: ' engineer = {' },
  {
    type: 'indent', children: [
      { type: 'prop', text: 'stack' },
      { type: 'plain', text: ': [' },
      { type: 'str', text: '"Java"' },
      { type: 'plain', text: ', ' },
      { type: 'str', text: '"Spring Boot"' },
      { type: 'plain', text: ', ' },
      { type: 'str', text: '"JPA"' },
      { type: 'plain', text: ', ' },
      { type: 'str', text: '"MySQL"' },
      { type: 'plain', text: '],' },
    ]
  },
  {
    type: 'indent', children: [
      { type: 'prop', text: 'focus' },
      { type: 'plain', text: ': ' },
      { type: 'str', text: '"Backend Systems · API Design · Security"' },
      { type: 'plain', text: ',' },
    ]
  },
  {
    type: 'indent', children: [
      { type: 'prop', text: 'status' },
      { type: 'plain', text: ': ' },
      { type: 'str', text: '"Building at Deltafour 🚀"' },
    ]
  },
  { type: 'plain', text: '}; ' },
  { type: 'comment', text: '// open to full-time roles' },
];

export const stats = [
  { num: '2+', label: 'Years Coding' },
  { num: '10K+', label: 'Records Processed' },
  { num: '2', label: 'Internships' },
  { num: 'SIH\'24', label: 'National Finalist' },
  { num: '7.67', label: 'CGPA / 10' },
];

export const experience = [
  {
    date: 'Jul 2025 — Present',
    company: 'Deltafour (Upsoft Softech)',
    location: 'Remote · India',
    role: 'Java Backend Development Intern',
    bullets: [
      'Developed high-performance RESTful APIs using Java and Spring Boot, enabling scalable backend operations across production services.',
      'Led ORM migration (JPA) to replace raw SQL queries, significantly reducing SQL injection risks and improving data access layer maintainability.',
      'Enhanced system security by implementing protection mechanisms against password brute-force attacks, strengthening authentication reliability.',
      'Contributed to code quality through debugging, optimization, and active participation in code reviews aligned with agile engineering best practices.',
    ],
    tags: [
      { label: 'Java', accent: true },
      { label: 'Spring Boot', accent: true },
      { label: 'JPA', accent: true },
      { label: 'REST APIs', accent: false },
      { label: 'Security', accent: false },
      { label: 'Agile', accent: false },
    ],
  },
  {
    date: 'Jun 2024 — Aug 2024',
    company: 'IBM SkillsBuild – CSRBOX',
    location: 'Remote · India',
    role: 'Data Analyst Intern',
    bullets: [
      'Processed and analyzed 10,000+ records through enhanced ETL pipelines, surfacing actionable insights that informed organizational decision-making.',
      'Authored data dictionaries and standardized documentation practices, improving data governance and cross-system consistency across the project lifecycle.',
    ],
    tags: [
      { label: 'Python', accent: true },
      { label: 'ETL Pipelines', accent: true },
      { label: 'Data Analysis', accent: false },
      { label: 'Excel', accent: false },
      { label: 'Documentation', accent: false },
    ],
  },
];

export const projects = [
  {
    badge: '// FEATURED',
    badgeStyle: {},
    title: 'Student Management System',
    desc: 'Full-featured, menu-driven CRUD application to manage student records with robust OOP design patterns — encapsulation, inheritance, and polymorphism. Integrated persistent MySQL storage with exception handling and transaction management ensuring data integrity under concurrent operations. Structured with Maven for dependency management.',
    stack: [
      { label: 'Java', accent: true },
      { label: 'Spring Boot', accent: true },
      { label: 'MySQL', accent: true },
      { label: 'Maven', accent: false },
      { label: 'OOP', accent: false },
      { label: 'Transactions', accent: false },
    ],
  }
];

export const skills = [
  {
    icon: '☕',
    iconStyle: { background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' },
    category: 'Languages',
    items: ['Java', 'Python', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: '⚙️',
    iconStyle: { background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.2)' },
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'JPA', 'JDBC', 'Maven'],
  },
  {
    icon: '🗄️',
    iconStyle: { background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' },
    category: 'Databases',
    items: ['MySQL', 'Schema Design', 'Query Optimization', 'Transactions'],
  },
  {
    icon: '🧠',
    iconStyle: { background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)' },
    category: 'CS Fundamentals',
    items: ['DSA', 'OOP', 'REST APIs', 'System Design'],
  },
  {
    icon: '🛠️',
    iconStyle: { background: 'rgba(250,199,117,0.1)', border: '1px solid rgba(250,199,117,0.2)' },
    category: 'Developer Tools',
    items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman'],
  },
  {
    icon: '🐧',
    iconStyle: { background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' },
    category: 'Platforms',
    items: ['Linux', 'Agile/Scrum', 'Excel', 'PowerPoint'],
  },
];

export const education = [
  {
    icon: '🎓',
    degree: 'B.Tech — Computer Science & Engineering (Data Science)',
    school: 'Techno Main Salt Lake, Kolkata',
    meta: '2022 – Present · CGPA: 7.67 / 10',
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Education (Class XII)',
    school: 'Mithila Academy Public School, Bokaro',
    meta: '2020 – 2022 · 80.6%',
  },
];

export const achievements = [
  {
    icon: '🏆',
    title: 'SIH 2024 — National Finalist',
    desc: 'Qualified for the Smart India Hackathon 2024 national final out of thousands of teams, demonstrating strong problem-solving and teamwork under competitive conditions.',
  },
  {
    icon: '👥',
    title: 'Member Coordinator — Samarth Society',
    desc: 'Led organizational and outreach initiatives for Samarth — The Educational Society at Techno Main Salt Lake, developing leadership, event management, and communication skills.',
  },
];

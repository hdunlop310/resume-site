// All site content lives here. Edit this file to update the site.
export const profile = {
  name: 'Heather Dunlop',
  title: 'Software Engineer',
  tagline:
    'Software engineer with 4+ years of Python experience on risk applications, now building frontends in React.',
  location: 'Glasgow, Scotland',
  links: {
    github: 'https://github.com/hdunlop310',
    linkedin: 'https://www.linkedin.com/in/hdunlop310/',
    email: 'hdunlop310@gmail.com',
  },
  cvUrl: '/Heather-Dunlop-CV.pdf',
}

export const experience = [
  {
    company: 'JPMorgan Chase',
    role: 'Senior Associate Software Engineer',
    period: 'Sep 2022 – Present',
    location: 'Glasgow, Scotland',
    summary: 'Python backend engineer on risk applications, now moving into frontend with React.',
    stats: [
      { value: '4+', label: 'years in Python' },
      { value: 'Risk', label: 'multiple applications' },
      { value: 'React', label: 'current focus' },
    ],
    highlights: [
      { title: 'AI-driven development', text: 'Experienced in AI-assisted engineering, including creating custom skills and agents.' },
      { title: 'Risk calculation engines', text: 'Python backend development across multiple risk applications.' },
      { title: 'API creation and development', text: 'Designing and building REST APIs.' },
      { title: 'Legacy Python frontends', text: 'Developing and maintaining existing Python-based frontends.' },
      { title: 'Python to React migration', text: 'Moving a Python frontend over to React.' },
      { title: 'Data visualisation', text: 'Manipulating and presenting data clearly.' },
      { title: 'Orchestration workflows', text: 'Coordinating multi-step processes end to end.' },
      { title: 'Chatbot development', text: 'Building simple chatbots.' },
      { title: 'Traders and quants', text: 'Working hands-on with the people who use the tools.' },
    ],
    tags: ['Python', 'AI-Driven Development', 'REST APIs', 'React', 'Data Visualisation', 'Orchestration', 'Risk Engines', 'Chatbots'],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Software Engineer Intern',
    period: 'Jun 2021 – Aug 2021',
    location: 'Glasgow, Scotland',
    summary: 'Summer internship on a Python team, working on legacy UIs and chatbots.',
    highlights: [
      { title: 'Legacy Python UI', text: 'Worked on an existing Python-based user interface.' },
      { title: 'Python chatbot development', text: 'Experimented with building our own neural network to learn how chatbots work.' },
      { title: 'Rasa chatbot', text: 'Implemented a Rasa chatbot for the team.' },
    ],
    tags: ['Python', 'Rasa', 'Neural Networks', 'Django', 'Git'],
  },
]

export const earlyExperience = [
  { company: 'IBM', period: 'Aug 2017', note: 'Work experience placement in Greenock & Edinburgh. Updated packages on cloud and Linux machines, and created a visual presentation deck.' },
  { company: 'British Gas', period: 'Nov 2015', note: 'Work experience placement, Uddingston.' },
]

export const education = [
  {
    school: 'University of Glasgow',
    course: 'BSc (Hons) Computing Science',
    period: '2018 – 2022',
    grade: '2:1, specialism in Information Security',
    points: [
      'Final-year project: a Swift app teaching school students how hashing works.',
      'Coached 3rd-year students on their software engineering team project.',
      'Also studied Mathematics, Theology and German.',
    ],
    modules: [
      'Advanced Software Engineering Practices',
      'Computational Social Intelligence',
      'Conversational Interfaces',
      'Emerging Topics in Cyber Security',
      'Forensics',
      'Machine Learning',
      'Mobile Human Computer Interaction',
      'Cyber Security Fundamentals',
      'Database Systems',
      'Human Centred Security',
      'Web Science',
    ],
  },
]

export const qualifications = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', period: 'Oct 2026', url: 'https://www.credly.com/badges/e83a20ae-ca0c-49b6-b365-f7e12a705bee/public_url' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', period: '2023 – 2026', url: 'https://www.credly.com/badges/c4c4d360-71ba-4911-b79d-461b73bfd880/public_url' },
  { name: 'Symphony Associate Developer', issuer: 'Symphony', period: '2022', url: 'https://www.credly.com/badges/5422ed96-25af-44aa-b3e9-5f388e7bb0fa/public_url' },
]

export const projects = [
  {
    name: 'neontetrashop',
    period: 'Aug 2026 – Present',
    description:
      'Shopify store for a Glasgow small business. Custom CSS and Liquid theming, seasonal theming, UX/UI design, and Instagram and Facebook integration with Shopify, plus store settings, discounts and setup.',
    tags: ['Shopify', 'Liquid', 'CSS', 'UX/UI Design', 'Seasonal Theming', 'Instagram', 'Facebook'],
    url: 'https://neontetrashop.com',
    repo: '',
  },
  {
    name: 'Pub Crawl Live Tracker',
    period: '2026',
    description:
      'Live leaderboard, map and reviews for a group pub crawl. No accounts needed, works on any phone, with an organiser mode for editing the route.',
    tags: ['Cloudflare Workers', 'KV', 'JavaScript', 'REST API'],
    url: 'https://pubcrawl.tennentsenjoyer.workers.dev',
    repo: '',
  },
  {
    name: 'Hashing Education App',
    period: '2021 – 2022',
    description:
      'Final-year university project: a Swift iOS app teaching hashing concepts to high school students through interactive lessons.',
    tags: ['Swift', 'iOS', 'Cyber Security'],
    url: '',
    repo: '',
  },
  {
    name: 'This Website',
    period: '2026',
    description: 'My resume site, built to learn React: React Router, plain CSS, content-driven pages.',
    tags: ['React', 'Vite', 'React Router'],
    url: '',
    repo: 'https://github.com/hdunlop310/resume-site',
  },
]

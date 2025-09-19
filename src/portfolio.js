const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://angi2412.github.io',
  title: 'AM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Angelina Mohr',
  role: 'Software Engineer',
  description:
    'I am a Sofware Engineer from Germany with a passion for building and maintaining scalable, secure, and reliable systems. I have a M.Sc. in computer science and have a passion for learning new technologies.',
  social: {
    linkedin: 'https://www.linkedin.com/in/angelina-horn-25341963/',
    github: 'https://github.com/angi2412',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Multi Objective Hybrid Autoscaing (MOHA)',
    description:
      'A support vector regression (SVR) Kubernetes autoscaler which is able to scale horizontally and vertically based on historical data.',
    stack: ['Kubernetes', 'Python', 'Machine Learning'],
    sourceCode: 'https://github.com/Angi2412/Multi-Objective-Hybrid-Autoscaing-MOHA'
    }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Git',
  'Jenkins',
  'Docker',
  'Kubernetes',
  'Python',
  'Java',
  'Bash'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'angelina.mohr@icloud.com',
}

export { header, about, projects, skills, contact }

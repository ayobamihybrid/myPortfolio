import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  corjl,
  jumia,
  tesla,
  ourmenu,
  shopify,
  eshop,
  jobit,
  tripguide,
  threejs,
  Eshop,
  finanseer,
  Omnifood,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Omnifood',
    icon: jumia,
    iconBg: '#383E56',
    date: 'March 2021 - April 2022',
    points: [
      'Developed and maintained this web application using React.js and other related technologies.',
      'Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'OurMenu',
    icon: ourmenu,
    iconBg: 'white',
    date: 'June 2021 - July 2022',
    points: [
      'Developed and maintained this application using ReactNative and other related technologies.',
      'Optimized and refactored code bases.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Eshop',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Oct 2022 - Dec 2022',
    points: [
      'Developed this responsive web-based application using accessibility standards.',
      'Planned and developed an authentication system with varying levels of security.',
      'Integrated payment solutions to backend.',
      'Implemented a mailing service using Nodejs and Nodemailer.',
      // 'Developed and deployed a robust REST API using nodejs and express, powering a digital marketplace platform.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Corjl',
    icon: corjl,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Optio hic unde fuga eius maiores reprehenderit porro a nesciunt maxime harum.',
      'Adipisicing elit. Optio hic unde fuga eius maiores reprehenderit porro a nesciunt maxime harum.',
      'Reprehenderit porro a nesciunt maxime harum.',
      'Dolor sit amet consectetur eius maiores reprehenderit porro a nesciunt maxime harum.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Ipsum dolor sit amet consectetur adipisicing elit. Earum, amet consectetur adipisicing sit amet!',
    name: 'Mr. Trevor',
    designation: 'CTO',
    company: 'Corjl',
    image:
      'https://pbs.twimg.com/profile_images/1598722204963082240/KP29w2z7_400x400.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ayobami does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Ayobami optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: 'Lola Davies',
    designation: 'CEO',
    company: 'Larol Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Eshop',
    description:
      'Web application that enables users to search for their favorite products, shop online, make payments, and get their items delivered to their location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Eshop,
    source_code_link: 'https://github.com/ayobamihybrid/eshop-',
  },
  {
    name: 'Finanseer',
    description:
      'Designed to empower users to efficiently track their revenue and expenses , it offers features like categorizing income and expenditures, and setting financial goals.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'materialUI',
        color: 'pink-text-gradient',
      },
    ],
    image: finanseer,
    source_code_link: 'https://github.com/ayobamihybrid/mernFinanseer',
  },
  {
    name: 'Omnifood',
    description:
      'A comprehensive food subscription platform, allows users to tailor their personal tastes and nutritional needs. The smart food subscription that will make you eat healthy.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Omnifood,
    source_code_link: 'https://github.com/ayobamihybrid/omnifood1',
  },
];

export { services, technologies, experiences, testimonials, projects };

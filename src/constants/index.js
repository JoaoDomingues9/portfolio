
import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,

  cdlpc,
  ubi,
  star,
  hultiglogo,
  certiprof,
  udemy,
  google,
  paloalto,
  cisco,
  typeScript,
  nodejs,
  mongo,
  python,
  c,
  firebase,
  postgres,
  flutter,
  bash,
  home,
  solarSystem,
  replatit,
  recipe,
  shelll,
  sd,

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "System Administrator",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Master in Computer Science and Engineering",
    company_name: "University of Beira Interior, Portugal",
    icon: ubi,
    iconBg: "#fff",
    date: "2024-Current",
    points: [
      "Courses undertaken: Software Quality, Communication Protocols, Machine Learning, Interactive Computing and Visualization, Database Management Systems, Cloud Technologies and Software, Network, Server and Application Penetration Testing, Security of Cloud Solutions, Big Data, Knowledge Discovery and Data Mining, Object Recognition and Motion Analysis, IoT",
    ],
  },
  {
    title: "Degree in Computer Science and Engineering",
    company_name: "University of Beira Interior, Portugal",
    icon: ubi,
    iconBg: "#fff",
    date: "2021-2024",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, Database Management Systems, Distributed Systems, Object Oriented Programming, Computer Architecture, Computer Network, Network Systems Administration, Computer Graphics, Multimedia, Software Engineering, Artificial Inteligence, Cybersecurity, Mobile Programming, Theory of Computation, Human Interaction with a Computer, Computational Logic, Web Programming, Functional Programming, Programming Labs, Computer Technologies.",
    ],
  },
  {
    title: "High School",
    company_name: "College Dr. Luís Pereira da Costa, Portugal",
    icon: cdlpc,
    iconBg: "#fff",
    date: "2018-2021",
    points: [
      "Courses undertaken: Biology, Chemistry, Psycology and Mathematics.",
    ],
  },
];

const technologies = [

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typeScript,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Ubuntu",
  //   icon: ubuntu,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "C",
  //   icon: c,
  // },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Shell Scripting",
    icon: bash,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongo,
  // },
  {
    name: "Flutter",
    icon: flutter,
  },



];

const experiences = [
  {
    title: "Investigator",
    company_name: "University of Beira Interior, HULTIG",
    icon: hultiglogo,
    iconBg: "#fff",
    date: "July 2024 - present",
    points: [
      "Software developer with experience in creating efficient and scalable applications, using various programming languages and frameworks. I work on all stages of the development cycle, from requirements analysis to final delivery, with a focus on quality and performance. I also have experience with machine learning",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Star Junior Enterprise",
    icon: star,
    iconBg: "#fff",
    date: "March 2024 - Sept 2024",
    points: [
      "Front-end developer proficient in React, skilled in crafting responsive and dynamic user interfaces using HTML, CSS, and JavaScript and Experience in building reusable components",
    ],
  },
];

const extracurricular = [
  {
    title: "Scrum Foundation Professional Certification",
    type: "Certification",
    icon: certiprof,
    iconBg: "#007BB5",
    date: "Oct 2023",
    points: ["Credential ID: 90484449"],

  },
  {
    title: "Introduction to Packet Tracer",
    type: "Certification",
    icon: cisco,
    iconBg: "#050C18",
    date: "March 2022",
    points: [
      "Packet Tracer",
    ],
  },

  {
    title: "Complete Web Developer",
    type: "Certification",
    icon: udemy,
    iconBg: "#A435F0",
    date: "March 2025",
    points: [
      "Credencial: https://www.udemy.com/certificate/UC-a4d45850-f332-43c4-afcb-d820a2163bca/",
    ],

  },
  {
    title: "Google Cloud Cybersecurity Certificate",
    type: "Certification",
    icon: google,
    iconBg: "#4285F4",
    date: "April 2025",
    points: [
      "Credencial: https://www.credly.com/badges/b1981a9c-9eee-48e1-aeb0-b44fff1fc726/linked_in_profile",
    ],

  },
  {
    title: "Cloud Security Fundamentals",
    type: "Certification",
    icon: paloalto,
    iconBg: "#FF6B00",
    date: "May 2025",
    points: [
      "Credencial ID: n9lXxh4Lri",
    ],

  },

];

const projects = [
  {
    name: "WonderPlaces",
    description:
      "Development of a mobile application in Flutter with the use of Firebase, aimed primarily at creating a travel review app. Features include destination reviews, user messaging, and interactive map display",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/JoaoDomingues9/wonderplaces",
    live_project_link: "https://github.com/JoaoDomingues9/wonderplaces",
    isSmartphoneImage: true,
    isPrivate: true,
  },
  {
    name: "Solar System",
    description:
      "Development of a simulation of our solar system in C++ utilizing OpenGL, GLM, GLFW, and GLAD technologies. Features include planet information, shading, focus on specific planets, and implementation of a skybox.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "opengl",
        color: "green-text-gradient",
      },
      {
        name: "glad",
        color: "pink-text-gradient",
      },
      {
        name: "glm",
        color: "blue-text-gradient",
      },
      {
        name: "glfw",
        color: "green-text-gradient",
      },
    ],
    image: solarSystem,
    source_code_link: "https://github.com/JoaoDomingues9/Projeto-CG",
    live_project_link: "https://github.com/JoaoDomingues9/Projeto-CG",
    isSmartphoneImage: false,

  },
  {
    name: "Recipes",
    description:
      "Recipe management project aimed at allowing users to search for recipes, featuring functionalities such as downloading recipes in .pdf format, adding, and removing recipes. Developed using React, MongoDB, and Node.js technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "tachyons",
        color: "blue-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/JoaoDomingues9/projeto_pweb",
    live_project_link: "https://github.com/JoaoDomingues9/projeto_pweb",
  },
  {
    name: "Shell Scripting",
    description:
      "Implementation of a Shell capable of checking .jpg files, navigating directories, performing calculations, comparing file sizes, among other functionalities. Developed using the C programming language.",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },

    ],
    image: shelll,
    source_code_link: "https://github.com/JoaoDomingues9/SO-Shell",
    live_project_link: "https://github.com/JoaoDomingues9/SO-Shell",
  },
  {
    name: "Replat-it",
    description:
      "Creation of a mobile application using Flutter and Firebase, primarily for booking meals for free and enabling messaging between users and restaurants",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },

    ],
    image: replatit,
    source_code_link: "https://github.com/pedro742k2/RePlate-It-Flutter",
    live_project_link: "https://github.com/pedro742k2/RePlate-It-Flutter",
    isSmartphoneImage: true,
    isPrivate: true,
  },
  {
    name: "School Management System",
    description:
      "The School Management System is a comprehensive solution designed to streamline and enhance the administrative and academic operations of educational institutions. Developed using JavaScript and TypeScript, with a robust PostgreSQL database, this system offers a range of functionalities to manage users, enroll students in courses, add new courses, grade students, and more. The platform also includes powerful statistical tools to provide insights into various aspects of the school's performance.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },

    ],
    image: sd,
    source_code_link: "https://github.com/JoaoDomingues9/projeto_sd",
    live_project_link: "https://github.com/JoaoDomingues9/projeto_sd",
    isPrivate: true,
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};

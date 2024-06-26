import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  Netflix,
  vibehub,
  ChatsUp,
  FitnessEdge,
  LeetCode,
  CodingNinjas,
  LeetCodeicon,
  CodingNinjaslogo,
  CNHead,
  LeetCodeHead,
  SocketIO
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Structures and Algorithm",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Computer Science Student",
    icon: creator,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "SocketIO",
    icon: SocketIO,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "ChatsUp",
    description:
      "A Real Time chat Application built using MERN stack with the help of Socketio where the users can send messages to other users in real time. Features JWT for password encryption and authorization, catering to both existing and new users",
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
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "SocketIO",
        color: "pink-text-gradient",
      },
    ],
    image: ChatsUp,
    source_code_link: "https://github.com/Anainwal07/ChatsUp",
  },
  {
    name: "VibeHub",
    description:
      "A MERN-based social media platform where users can post images, add/remove friends, like/dislike posts, and switch between light and dark mode themes. Features JWT for password encryption and authorization, catering to both existing and new users",
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
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: vibehub,
    source_code_link: "https://github.com/Anainwal07/VibeHub",
  },
  {
    name: "Netflix Clone",
    description:
      "A dynamic web application faithfully replicating the sleek and intuitive interface of the original Netflix platform, offering users an immersive and familiar streaming experience, built using HTML, CSS, and JavaScript. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/Anainwal07/Netflix-India---clone-",
  },
  {
    name: "Fitness Edge",
    description:
      "This is the first Project I built and it is also very close to my heart.A web page for my College Gym FitnessEdge built using basic HTML and CSS.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: FitnessEdge,
    source_code_link: "https://github.com/Anainwal07/Fitness-Edge",
  },

];

const Coding = [
  {
    name: LeetCodeHead,
    logo: LeetCodeicon,
    image: LeetCode,
    source_code_link: "https://leetcode.com/Ankit_Nainwal/",
  },
  {
    name: CNHead,
    logo: CodingNinjaslogo,
    image: CodingNinjas,
    source_code_link: "https://www.codingninjas.com/studio/profile/Ankit_Nainwal",
  },
];

export { services, technologies, projects ,Coding};

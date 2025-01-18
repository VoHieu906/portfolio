// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
];

// AboutMe icons
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";

export const aboutData = [
  {
    title: "Github",
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    title: "0833799018",
    amount: 227,
    icon: <ContactsBook2LineIcon />,
  },
  {
    title: "vohieutd09@gmail.com",
    amount: 176,
    icon: <MailFillIcon />,
  },
  {
    title: "District 7, Ho Chi Minh City",
    amount: 107,
    icon: <MapPin2LineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Hello, I am Võ Nguyễn Trường Hiếu. I am currently a 7th-semester student at FPT Polytechnic College, majoring in Information Technology with a specialization in web programming. I code using HTML, CSS, React, TypeScript, Tailwind, Next.js, and more. I am passionate about building modern, responsive web applications and always strive to improve my skills. In addition to my technical expertise, I enjoy collaborating with others to create innovative solutions. My current focus is on enhancing user experiences and optimizing web performance. I look forward to contributing to exciting projects and expanding my knowledge in the field of web development.";

// End of AboutMe icons

// Skills
export const skillsData = [
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },

  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "ThreeJS",
    icon: "/skills/threejs.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "PostgreSql",
    icon: "/skills/elephant.png",
  },
  {
    name: "PHP",
    icon: "/skills/php.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />;
// Experience
export const experienceData = [
  {
    year: 2024,
    title: "Foundation and Basics",
    education: "FPT Polytechnic College",
    experience: [
      "Faculty: Information Technology",
      "Major: Web Programming",
      "Grade Point Average: 8.5",
    ],
  },
  {
    year: 2024,
    title: "Internship at FPT College with CDS Enterprise. ",
    education: "Internship",
    experience: [
      "-Working with the members of the company",
      "-Implementing simple interfaces and functionalities such as account management and inventory management.",
    ],
  },
];

export const projectsData = [
  {
    name: "ManagementApp",
    desc: "A project to manage your work ",
    url: "/projects/managementapp.png",
    qr: "/projects/qrmanagementapp.png",
    github: "https://github.com/VoHieu906/management-app",
    link: "https://main.d1tasadyl387pj.amplifyapp.com/",
    tech: ["TypeScript", "Tailwind", "PostgreSql"],
  },
  {
    name: "Klimate",
    desc: "A project display information about the weather ",
    url: "/projects/klimate.png",
    qr: "/projects/qrklimate.png",
    github: "https://github.com/VoHieu906/Klimate",
    link: "klimate-drab.vercel.app",
    tech: ["NextJS", "TypeScript", "Tailwind", "ShadCN"],
  },
  {
    name: "Carshowcase",
    desc: "A website showing car",
    url: "/projects/carshowcase.png",
    qr: "",
    github: "https://github.com/VoHieu906/car-showcase",
    link: "",
    tech: ["NextJS", "TypeScript", "Tailwind"],
  },
  {
    name: "ZingMp3",
    desc: "A clone of the ZingMP3 website",
    url: "/projects/zingmp3.png",
    qr: "",
    github: "https://github.com/VoHieu906/TodoList-Zingmp3",
    link: "",
    tech: ["React"],
  },
  {
    name: "CloudLab",
    desc: "An e-commerce website specializing in laptops and phones.",
    url: "/projects/cloudlab.png",
    qr: "",
    github: "https://github.com/VoHieu906/CloudLab",
    link: "",
    tech: ["React"],
  },
];

export const projectsButton = [
  "All",
  "React",
  "Tailwind",
  "ShadCN",
  "NextJS",
  "PostgreSql",
  "TypeScript",
];

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  // {
  //   id: "reviews",
  //   name: "Reviews",
  //   icon: <UserStarLineIcon />,
  // },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  // {
  //   id: "pricing",
  //   name: "Pricing",
  //   icon: <PriceTag3LineIcon />,
  // },
  // {
  //   id: "contact",
  //   name: "Contact",
  //   icon: <ContactsBook2LineIcon />,
  // },
  // {
  //   id: "questions",
  //   name: "Questions",
  //   icon: <QuestionAnswerLineIcon />,
  // },
];

export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const QuestionArrow = <ArrowDropDownLineIcon />;

// Reviews

import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Mark T., Freelance Graphic Designer",
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-2.png",
    name: "Sarah B., E-commerce Store Owner",
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-3.png",
    name: "Emily R., CEO of Tech Startup",
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-1.png",
    name: "Bob W., Lifestyle Blogger",
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-5.png",
    name: "David H., Director of Non-Profit Organization",
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
];

export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Premium",
    pricing: "$5,000 - $10,000",
    features: [
      "Unlimited pages",
      "Responsive design",
      "Comprehensive SEO",
      "Contact form ",
      "Social media links",
      "Advanced security",
      "E-commerce (unlimited products)",
      "Blog setup",
      "Google Analytics with custom reports",
      "6 months support",
    ],
    recommended: "Medium-sized businesses, online stores, service providers",
  },
  {
    title: "Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "CContact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "Google Analytics",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;

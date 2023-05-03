// Enter all your detials in this file
// Logo images
// Profile Image

import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import Firebase from "./assets/techstack/firebase.png";

import node from "./assets/techstack/nodejs.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import express from "./assets/techstack/express.jpg";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import MongoDB from "./assets/techstack/MongoDB.jpeg";
import postgreSQL from "./assets/techstack/postgreSQL.png";
import Netlify from "./assets/techstack/netlify.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpeg";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import cv from "./assets/PavitarSinghcv.pdf";
//pdf

// Logos

// Enter your Personal Details here
export const personalDetails = {
  cv: cv,
  name: "Pavitar Singh",
  tagline: "Determined Full Stack Web Developer",
  img: profile,
  about: `Hello, I'm an aspiring web developer with a passion for creating dynamic and engaging websites that make an impact. I have already completed a number of impressive projects that demonstrate my strong understanding of HTML, CSS, JavaScript, Bootstrap and other web development frameworks and libraries, including Material UI, React, Node.js, Express.js, MongoDB, and more.\n \n With a positive outlook and a focus on the future, I'm always eager to learn new skills and stay on top of emerging technologies. As a fast learner, I am always eager to stay on top of emerging technologies and expand my skillset.\nI am confident that my positive outlook, focus on the future, and natural curiosity make me a strong candidate for any web development opportunity. Whether working independently or as part of a team, I am dedicated to delivering high-quality work that exceeds client expectations.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pavitar-singh",
  github: "https://www.github.com/Pavitar01",
  instagram: "https://www.instagram.com/mr_mikey.negi",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web development Using ReactJs",
    Company: `CodingSpoon`,
    Location: "Online",
    Type: "Training",
    Duration: "90 Hr ",
  },
  {
    Position: "Android App Development using Kotlin",
    Company: `FifthForce.in`,
    Location: "Online",
    Type: "Training",
    Duration: "May 2022 - Jul 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `Lovely Professional University`,
    Location: "Jalandhar | IN",
    Type: "Full Time",
    Duration: "Aug 2020 - 2024",
  },
  {
    Position: "Higher Secondary School ",
    Company: `Mukand Lal Public School`,
    Location: "Yamuna Nagar, IN",
    Type: "Full Time",
    Duration: " Mar '19 - Mar '20",
  },
  {
    Position: "Secondary School",
    Company: `Sivananda Praveen Public School `,
    Location: "Yamuna Nagar, IN",
    Type: "Full Time",
    Duration: " Mar '17 - Mar '18",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  node: node,
  MongoDB,
  postgreSQL,
  js: js,
  react: react,
  express: express,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  Netlify: Netlify,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Vidchat App",
    image: projectImage1,
    description: ` Our platform is built with React JS, the latest and greatest in web development, to bring you a user-friendly, fast, and reliable video chat experience. With React's powerful framework, we've created a platform that's highly customizable, responsive, and packed with innovative features like screen sharing, messaging and less lagging.This is the perfect tool to connect with anyone, anywhere, anytime.`,
    techstack: "ReactJs, Firebase,ZegoCloud",
    previewLink: "https://myvidchat.netlify.app/",
    githubLink: "https://github.com/Pavitar01/MYVIDCHAT-1",
  },
  {
    title: "RChat App",
    image: projectImage2,
    description: `The Rchat project is built in React JS and features Firebase authentication. Users can securely sign up and sign in to the chat appliation. Once authenticated, users can engage in real-time conversations with other users., this chat project is a robust and secure platform for real-time messaging.`,
    techstack: "ReactJs, Firebase",
    previewLink: "https://myrchat.netlify.app/",
    githubLink: "https://github.com/Pavitar01/MyChats/",
  },
  {
    title: "MNews App",
    image: projectImage3,
    description: `MyNewsApp is a cutting-edge news application that uses the latest technologies to provide an immersive and seamless news reading experience. It is built with the powerful combination of React JS and Next JS, ensuring that the app is optimized for all devices, from desktops to mobile phones.\nOverall, it is powered by the latest technologies and real-time news updates.`,
    techstack: "NextJs, ReactJs, Mgnews API",
    previewLink: "https://mnewsapp.netlify.app/",
    githubLink: "https://github.com/Pavitar01/mnewsapp",
  },
  {
    title: "Wemon",
    image: projectImage4,
    description: `Wemon is a weather app built using react js that allows users to get the temperature of any location just by entering the state name. The app integrates an advanced weather API using axios to retrieve accurate and up-to-date temperature data. It provides hourly and daily weather forecasts. The app is designed to be user-friendly and intuitive, making it easy for anyone to quickly get the weather information they need..`,
    techstack: "ReactJs, Weather API",
    previewLink: "https://wemon.netlify.app/",
    githubLink: "https://github.com/Pavitar01/",
  },
  {
    title: "Grammer Checker",
    image: projectImage5,
    description: `This tool buil in React JS using Open AI API is a web application that uses NLP technology to detect and correct grammatical errors in written text. The application is built using React JS, a popular Js library for building user interfaces, and integrates with Open AI API, which provides powerful machine learning algorithms for text analysis.
\n
    This provides a useful tool for anyone looking to improve the clarity and correctness of their written communication. Whether you are a student, professional writer, or simply someone who wants to improve their writing skills, this can help you identify and correct common grammatical mistakes.`,
    techstack: "NextJs, ReactJs, Mgnews API",
    previewLink: "https://mnewsapp.netlify.app/",
    githubLink: "https://github.com/Pavitar01/",
  },

  {
    title: "Image compressor",
    image: projectImage6,
    description: `An Image🖼️ Compressor built in HTML and JS is a web-based tool that enables users to reduce the file size of their images, and aspect ratios. It uses a combination of HTML, CSS, and JavaScript to provide a user-friendly interface that allows users to upload images, compress them, and download the compressed files.`,
    techstack: "HTML,CSS,Javascript",
    previewLink: "https://pavitar01.github.io/MyImageCompressor/",
    githubLink: "https://github.com/Pavitar01/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mickeynegi924@gmail.com",
  phone: "+91 8307434832",
};

import HeroTypewriter from "../../components/Hero/HeroTypewriter";
import homeGif from "../programer.gif";
export const hero = {
  title: `Hi, I'm Marcos Freitas`,
  subtitle: [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Javascript",
    "React",
    "Next.js",
  ],
  image: { imageGif: homeGif, alt: "MarcosFreitas" },
  description: {
    first: `Skilled and passionate web developer, I possess a solid foundation
      in HTML, CSS, and JavaScript, and excel at problem-solving, clear
      communication, and collaboration with stakeholders.`,
    second: `I'm able to deal with your projects and deliver a very good
    result in a short time!`,
  },
  buttons: {
    first: `Download Resume`,
    second: `Get in Touch`,
  },
  icons: [
    {
      name: "HTML5",
      classes: `devicon devicon-html5-plain`,
    },
    {
      name: "CSS3",
      classes: `devicon devicon-css3-plain`,
    },
    {
      name: "Javascript",
      classes: `devicon devicon-javascript-plain`,
    },
    {
      name: "ReactJS",
      classes: `devicon devicon-react-original`,
    },
    {
      name: "NextJS",
      classes: `devicon devicon-nextjs-original`,
    },
  ],
};

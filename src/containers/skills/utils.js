import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiJquery } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
// import { BsGithub } from "react-icons/bs";
export const skillsData = [
  {
    label: "Programing Languages",
    data: [
      {
        skillName: "HTML5",
        percentage: "90",
        skil: <FaHtml5 size={25} style={{ color: "#E34F26" }} />,
      },
      {
        skillName: "CSS3",
        percentage: "90",
        skil: <FaCss3Alt size={25} style={{ color: "#1572B6" }} />,
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
        skil: <FaJs size={25} style={{ color: "#F7DF1E" }} />,
      },
    ],
  },
  {
    label: "Frameworks / Libraries",
    data: [
      {
        skillName: "REACT.JS",
        percentage: "90",
        skil: <FaReact size={25} style={{ color: "#61DAFB" }} />,
      },
      {
        skillName: "NEXT.JS",
        percentage: "90",
        skil: <SiNextdotjs size={25} style={{ color: "#000000" }} />,
      },
      {
        skillName: "JQUERY",
        percentage: "80",
        skil: <SiJquery size={25} style={{ color: "#0769AD" }} />,
      },
    ],
  },
  {
    label: "Database Management",
    data: [
      {
        skillName: "MYSQL",
        percentage: "90",
        skil: <GrMysql size={30} style={{ color: "#4479A1" }} />,
      },
      {
        skillName: "POSTGRESQL",
        percentage: "90",
        skil: <BiLogoPostgresql size={30} style={{ color: "#336791" }} />,
      },
      
    ],
  },
  
];

import React from "react";
import styled from "styled-components";

const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Tailwind",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      }
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Tableau",
        icon: "https://img.icons8.com/color/200/tableau-software.png",
      },
      {
        name: "Git",
        icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "Github",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      },
      {
        name: "Firebase",
        icon: "https://www.svgrepo.com/show/353735/firebase.svg",
      },
      {
        name: "Excel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
      },
    ],
  },
];

const Skills = ({ isNavVisible }) => {
  return (
    <MainContainer isNavVisible={isNavVisible}>
      {skillsData.map((section, index) => (
        <div className="items" key={index}>
          <div>
            <h2>{section.title}</h2>
          </div>
          <div className="langs">
            {section.skills.map((skill, idx) => (
              <div className="container" key={idx}>
                <div>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default Skills;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  top: 5vh;
  padding: 10px 0 10px 0;
  backdrop-filter: blur(6px);
  overflow-y: auto;
  border: 1px solid rgba(200, 123, 255, 0.1);
  border-radius: 10px;
  z-index: ${({ isNavVisible }) => (isNavVisible ? "-1" : "1")};
  color: #baf4ff;
  align-items: center;
  
  .items {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    margin-bottom: 10px;
    .langs {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }
    img {
      width: 70px;
      background-color: #ffffff45;
      padding: 2px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4vh 0 0 0;
      width: 150px;
      color: white;
      font-weight: 500;
    }
  }
`;

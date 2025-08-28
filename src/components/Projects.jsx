/*eslint-disable */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Projects = ({ isNavVisible }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const React_projects = [
    {
      name: "PrepBuddy",
      link: "https://github.com/SurajSG23/PrepBuddy",
      img: "Projects/PrepBuddy.png",
      tech: ["React", "AI", "Education"],
      description: "AI-powered preparation assistant for interviews and exams",
    },
    {
      name: "My Resume AI",
      link: "https://github.com/SurajSG23/My-Resume-AI",
      img: "Projects/My_resume.png",
      tech: ["React", "AI", "Resume"],
      description: "Intelligent resume builder with AI suggestions",
    },
    {
      name: "Reportify AI",
      link: "https://github.com/SurajSG23/reportify/",
      img: "Projects/Reportify.png",
      tech: ["React", "AI", "Reports"],
      description: "Generate comprehensive reports using AI technology",
    },
    {
      name: "E-Commerce Product Listing",
      link: "https://github.com/SurajSG23/E-Commerce-Website",
      img: "Projects/e_commerce.png",
      tech: ["React", "E-commerce", "Web"],
      description: "Modern e-commerce platform with product management",
    },
    {
      name: "Dice Game",
      link: "https://github.com/SurajSG23/Dice-Game",
      img: "Projects/Dice_game.png",
      tech: ["React", "Game", "Interactive"],
      description: "Interactive dice game with smooth animations",
    },
    {
      name: "Todo App",
      link: "https://github.com/SurajSG23/TodoContext",
      img: "Projects/Todo_List.png",
      tech: ["React", "Context", "Productivity"],
      description: "Task management app with React Context",
    },
    {
      name: "Makerble Homepage",
      link: "https://github.com/SurajSG23/Makerble-HomePage",
      img: "Projects/Makerble_homepage.png",
      tech: ["React", "Landing", "UI/UX"],
      description: "Modern homepage design for Makerble platform",
    },
    {
      name: "Contact App-Firebase",
      link: "https://github.com/SurajSG23/FireBase-Contact-App",
      img: "Projects/FireBase_Contact.png",
      tech: ["React", "Firebase", "Database"],
      description: "Contact management with Firebase backend",
    },
    {
      name: "Skill Connect-Landing Page",
      link: "https://github.com/SurajSG23/landing-page-SC",
      img: "Projects/Skill_Connect.jpg",
      tech: ["React", "Landing", "Professional"],
      description: "Professional networking platform landing page",
    },
  ];

  const HTML_projects = [
    {
      name: "Job Portal",
      link: "https://github.com/SurajSG23/Job-Portal",
      img: "Projects/Job_Portal.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Complete job portal with search functionality",
    },
    {
      name: "Spotify Clone",
      link: "https://github.com/SurajSG23/Spotify-Clone",
      img: "Projects/Spotify_Clone.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Music streaming interface clone",
    },
    {
      name: "Roshambo Game",
      link: "https://github.com/SurajSG23/Rock_Paper_Scissors",
      img: "Projects/Roshambo.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Classic rock paper scissors game",
    },
    {
      name: "Super Mario Game",
      link: "https://github.com/SurajSG23/Super-Mario-Game",
      img: "Projects/Super_Mario.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Browser-based Super Mario game",
    },
    {
      name: "Netflix Clone",
      link: "https://github.com/SurajSG23/Netflix-Clone",
      img: "Projects/Netflix_Clone.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Streaming platform interface clone",
    },
    {
      name: "Amazon Clone",
      link: "https://github.com/SurajSG23/Amazon-Clone",
      img: "Projects/Amazon_Clone.png",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "E-commerce platform interface clone",
    },
  ];

  const allProjects = [
    ...React_projects.map((p) => ({ ...p, category: "react" })),
    ...HTML_projects.map((p) => ({ ...p, category: "html" })),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <MainContainer isNavVisible={isNavVisible}>
      <Header>
        <Title>My Projects</Title>
        <FilterTabs>
          <FilterTab
            active={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          >
            All Projects
          </FilterTab>
          <FilterTab
            active={activeFilter === "react"}
            onClick={() => setActiveFilter("react")}
          >
            React Apps
          </FilterTab>
          <FilterTab
            active={activeFilter === "html"}
            onClick={() => setActiveFilter("html")}
          >
            Web Pages
          </FilterTab>
        </FilterTabs>
      </Header>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} delay={index * 0.1}>
            <ImageContainer>
              <ProjectImage src={project.img} alt={project.name} />
              <ImageOverlay />
            </ImageContainer>

            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectActions>
                <GitHubButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon viewBox="0 0 24 24">
                    <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" />
                  </GitHubIcon>
                  View Code
                </GitHubButton>
              </ProjectActions>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </MainContainer>
  );
};

export default Projects;

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const MainContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  top: 5vh;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(200, 123, 255, 0.1);
  border-radius: 10px;
  z-index: ${({ isNavVisible }) => (isNavVisible ? "-1" : "1")};
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 5vh;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  /* animation: ${float} 3s ease-in-out infinite; */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 3rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid
    ${(props) => (props.active ? "#667eea" : "rgba(255,255,255,0.1)")};
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "rgba(255,255,255,0.05)"};
  color: ${(props) => (props.active ? "#fff" : "#a0a0a0")};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #667eea;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  animation: ${fadeInUp} 0.6s ease-out ${(props) => props.delay}s both;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.2),
    rgba(118, 75, 162, 0.2)
  );
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 500;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

const GitHubIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;

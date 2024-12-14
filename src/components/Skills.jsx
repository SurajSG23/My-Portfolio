import React from "react";
import styled from "styled-components";
const Skills = ({ isNavVisible }) => {
  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div className="items">
        <div>
          <h2>Programming Languages</h2>
        </div>
        <div className="langs">
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="C"
              />
            </div>
            <div>C</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
              />
            </div>
            <div>C++</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
              />
            </div>
            <div>Java</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <div>JavaScript</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
              />
            </div>
            <div>Python</div>
          </div>
        </div>
      </div>
      <div className="items">
        <div>
          <h2>Frontend Development</h2>
        </div>
        <div className="langs">
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="HTML"
              />
            </div>
            <div>HTML</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="CSS"
              />
            </div>
            <div>CSS</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <div>JavaScript</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
              />
            </div>
            <div>React</div>
          </div>
          <div className="container">
            <div>
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="TailWind"
              />
            </div>
            <div>Tailwind</div>
          </div>
        </div>
      </div>
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
      width: 60px;
      filter: drop-shadow(3px 3px 10px rgb(186, 66, 255));
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

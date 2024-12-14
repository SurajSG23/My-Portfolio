import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
const About = ({ isNavVisible }) => {
  const handleScrollToEducation = () => {
    document.getElementById("education-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div className="body">
        <div className="aboutContainer">
          <div>
            <h1>About Me</h1>
          </div>
          <div className="about">
            <p>
              As a diligent student at Sri Jayachamarajendra College Of
              Engineering, my academic journey is set to culminate in 2026.
              Harnessing a robust foundation in science from Sadvidya Composite
              PU College, I've honed my competencies in web development, an
              essential skill in today's digital world. This hands-on approach
              ensures that upon graduation, I will not only possess a strong
              theoretical background but also practical skills that are
              immediately applicable in the tech industry.
            </p>
          </div>
        </div>
        <div className="dp">
          <div className="spinner"></div>
          <div className="spinner1"></div>
        </div>
      </div>

      <ScrollButton onClick={handleScrollToEducation}>
        <div className="arrow">
          <div>
            <FaArrowCircleDown style={{display:'flex', justifyContent:'center', alignItems:'center'}}/>
          </div>
          <div>My Education</div>
        </div>
      </ScrollButton>

      <div id="education-section" className="edu">
        <div>
          <h2
            style={{
              color: "#ffffff",
              textShadow: "1px 1px 3px rgb(0, 255, 247)",
            }}
          >
            My Education Journey
          </h2>
        </div>
        <div className="line">
          <div className="points">
            <div className="points-content">
              <h3>Teresian Primary School</h3>
              <b>2008-17</b>
            </div>
          </div>
          <div className="points">
            <div className="points-content2">
              <h3>Maharshi High School</h3>
              <b>2017-20</b>
              <p>10th : 89.6%</p>
            </div>
          </div>
          <div className="points">
            <div className="points-content">
              <h3>Sadvidya Composite PU College</h3>
              <b>2020-22</b>
              <p>12th : 95.3% | KCET : 4750</p>
            </div>
          </div>
          <div className="points">
            <div className="points-content2">
              <h3>JSS STU (SJCE)</h3>
              <b>2022-26'</b>
              <p>CGPA : 9.1</p>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default About;
const ScrollButton = styled.button`
  position: absolute;
  bottom: 10vh;
  left: 80vw;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
  transition: all 0.1s ease-in-out;
  
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    color: #00ff88;
    transform: translateX(-50%) scale(1.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 990px){
    display: none;
  }
`;

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

  a {
    all: unset;
  }
  .body {
    position: relative;
    width: 100%;
    display: flex;
    top: 8vh;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    animation: dp 0.5s linear;
    & h1 {
      color: #ffffff;
      text-shadow: 1px 1px 3px rgb(0, 255, 247);
    }
    & .about {
      text-align: center;
      color: rgb(104, 255, 252);
      font-weight: 800;
      font-size: 20px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }
  .dp {
    width: 40%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    animation: dp 0.5s linear;
  }
  .spinner {
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 255, 247));
    width: 30vw;
    height: 30vw;
    animation: spinning82341 5s linear infinite;
    text-align: center;
    border-radius: 50%;
    filter: blur(0.5px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 238, 255);
  }

  .spinner1 {
    background: url("suraj2.webp") no-repeat center/cover;
    mask-image: radial-gradient(black 50%, transparent);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29vw;
    height: 29vw;
    border-radius: 50%;
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes move-left-right {
    from {
      top: 5vw;
      right: 5vh;
      opacity: 0.1;
    }
    to {
      top: 0;
      right: 0;
      opacity: 1;
    }
  }
  @keyframes move-right-left {
    from {
      top: 5vw;
      left: 5vh;
      opacity: 0.1;
    }
    to {
      top: 0;
      left: 0;
      opacity: 1;
    }
  }
  @keyframes dp {
    from {
      bottom: 10vw;
      opacity: 0.1;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  .edu {
    position: relative;
    top: 12vh;
    display: flex;
    margin: 0 auto;
    width: 70%;
    min-height: 100vh;
    color: white;
    flex-direction: column;
    text-align: center;
    h2 {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 33px;
    }
    & .line {
      display: flex;
      flex-direction: column;
      top: 5vh;
      position: relative;
      margin: 3vh auto;
      width: 2px;
      height: 80%;
      border: 2px solid rgb(66, 82, 255);
      justify-content: space-between;

      & .points {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 10px solid rgb(0, 183, 255);
        position: relative;
        left: -9.2px;
        color: white;
        & :hover {
          cursor: pointer;
          transform: scale(1.02);
        }
        & .points-content,
        & .points-content2 {
          position: absolute;
          top: -6vh;
          left: 1vw;
          padding: 15px 20px;
          min-width: 22vw;
          height: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #0011ff29, #4400ff55);
          border: 2px solid rgba(66, 79, 255, 0.595);
          border-radius: 25px 0 25px 0;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15),
            inset 0px 2px 4px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);

          animation: appear linear;
          animation-timeline: view();
          animation-range: entry 0 cover 10%;
          @keyframes appear {
            from {
              opacity: 0;
              /* scale: 0.5; */
              transform: translateY(-300px);
            }
            to {
              opacity: 1;
              /* scale: 1; */
              transform: translateY(0px);
            }
          }
        }
        & .points-content2 {
          left: -23vw;
          animation: appear2 linear;
          animation-timeline: view();
          animation-range: entry 0 cover 10%;
          @keyframes appear2 {
            from {
              opacity: 0;
              transform: translateY(-300px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 990px) {
    .edu {
      position: relative;
      display: flex;
      margin: 0 auto;
      width: 95%;
      min-height: 70vh;
      h2 {
        font-size: 25px;
      }
      & .line {
        & .points {
          width: 7px;
          height: 7px;
          border: 7px solid rgb(0, 183, 255);
          left: -7px;
          & .points-content,
          & .points-content2 {
            h3 {
              font-size: 17px;
            }
            b {
              font-size: 12px;
            }
            p {
              font-size: 12px;
            }
            top: -6vh;
            left: 1vw;
            min-width: 30vw;
            border-radius: 10px;
            height: 12vh;
          }
          & .points-content2 {
            left: -31vw;
          }
        }
      }
    }
  }
  @media (max-width: 814px) {
    ::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
      cursor: pointer;
      background-color: transparent;
    }
    .body {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 9vh;
    }
    .dp {
      width: 100%;
      height: 40%;
    }
    .spinner {
      position: fixed;
      width: 250px;
      height: 250px;
      top: 1vh;
    }
    .spinner1 {
      position: fixed;
      top: 1.5vh;
      width: 240px;
      height: 240px;
    }
    .aboutContainer {
      position: absolute;
      top: 25vh;
      max-width: 90vw;
      & h1 {
        color: #ffffff;
        text-shadow: 1px 1px 3px rgb(0, 255, 247);
      }
      & .about {
        height: 40vh;
        text-align: center;
        color: rgb(104, 255, 252);
        font-weight: 800;
        font-size: 16px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        overflow-y: auto;
      }
    }
    .edu {
      position: relative;
      top: 82vh;
      display: flex;
      margin: 0 auto;
      width: 95%;
      min-height: 70vh;
      h2 {
        font-size: 20px;
      }
      & .line {
        & .points {
          width: 7px;
          height: 7px;
          border: 7px solid rgb(0, 183, 255);
          left: -7px;
          & .points-content,
          & .points-content2 {
            padding: 5px 0;
            h3 {
              font-size: 13px;
            }
            b {
              padding-top: 5px;
              font-size: 10px;
            }
            p {
              padding-top: 5px;
              font-size: 10px;
            }
            top: -6vh;
            left: 2vw;
            min-width: 40vw;
            border-radius: 10px;
            height: 12vh;
          }
          & .points-content2 {
            left: -42vw;
          }
        }
      }
    }
  }
`;

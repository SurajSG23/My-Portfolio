import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from "styled-components";
const Intro = ({ isNavVisible }) => {
  const [text] = useTypewriter({
    words: [
      "FrontEnd Development",
      "DSA in Java",
      "SEO",
      "MS excel",
      "FireBase",
      "DSA in C",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div className="body">
        <div className="dp">
          <div className="spinner"></div>
          <div className="spinner1"></div>
        </div>
        <div className="texts">
          <div
            className="name-details"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: "25px" }}>Hey, it's me</p>
            </div>
            <div>
              <h1 className="name-suraj">Suraj S G Dhanva</h1>
            </div>
            <div className="words">
              <h1>
                I'm proficient in{" "}
                <span style={{ fontWeight: "bold", color: "rgb(0, 255, 247" }}>
                  {text}
                </span>
                <Cursor cursorColor="rgb(0, 255, 247)" />
              </h1>
            </div>
          </div>
          <div
            className="links"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="wrapper">
              <a href="https://github.com/SurajSG23" target="_blank">
                <li className="icon github">
                  <span className="tooltip">GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    height="1.2em"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.69 7.69 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-s-g-dhanva-995a23298/"
                target="_blank"
              >
                <li className="icon linkedin">
                  <span className="tooltip">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1c-30.59 0-55.26-24.91-55.26-55.5C-1.47 21.64 23.14-3.5 53.79-3.5s55.26 25.15 55.26 55.64c.01 30.59-24.67 55.46-55.26 55.46zm394.23 339.9H355.74V312.34c0-32.33-1.16-73.93-45.09-73.93-45.13 0-52.06 35.31-52.06 71.74V448h-92.88V148.9h89.19v40.8h1.28c12.43-23.55 42.77-48.42 87.94-48.42 94.03 0 111.36 61.91 111.36 142.38V448z"></path>
                  </svg>
                </li>
              </a>
              <a href="https://www.instagram.com/suraj_sg23/" target="_blank">
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                  </svg>
                </li>
              </a>
            </ul>
            <a href="#">
              <button className="Download-button">
                <svg
                  viewBox="0 0 640 512"
                  width="20"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  ></path>
                </svg>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  View Resume
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Intro;

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

  a {
    all: unset;
  }
  .body {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  .texts {
    position: relative;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
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
    background: url("suraj.jpg") no-repeat center/cover;
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

  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: linear-gradient(rgb(186, 66, 255) 30%, rgb(0, 255, 247));
    border-radius: 50%;
    margin: 0 10px 0 10px;
    width: 50px;
    height: 50px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: move-left-right 0.5s linear;
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    font-weight: bold;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: black;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: red;
    color: #fff;
  }

  .Download-button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 12px 20px;
    color: white;
    background: linear-gradient(
      144deg,
      rgb(186, 66, 255),
      #5b42f3 50%,
      rgb(0, 255, 247)
    );
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em rgba(59, 48, 78, 0.527);
    letter-spacing: 0.05em;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
    height: 50px;
    animation: move-right-left 0.5s linear;
  }

  .Download-button svg {
    margin-right: 8px;
    width: 35px;
  }

  .Download-button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #3b82f6;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .Download-button:active {
    box-shadow: 0 0.3em 1em -0.5em #3b82f6;
  }

  .Download-button::before {
    content: "";
    width: 4px;
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
    transition: all 0.2s;
  }

  .Download-button::after {
    content: "";
    width: 4px;
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
    transition: all 0.1s;
  }

  .Download-button:hover::before,
  .Download-button:hover::after {
    height: 60%;
  }

  .Download-button:hover::before {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    transform: translate(5px, -15px) rotate(45deg);
  }

  .Download-button:hover::after {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transform: translate(-5px, 15px) rotate(45deg);
  }
  .name-suraj {
    font-size: 50px;
    color: rgb(189, 75, 255);
    text-shadow: 1px 1px 3px rgb(0, 255, 247);
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

  @media (max-width: 814px) {
    .body {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .texts {
      position: absolute;
      width: 100%;
      height: 60%;
      justify-content: space-evenly;
      bottom: 0;
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
    .links {
      flex-direction: column;
      gap: 15px;
    }
    .wrapper {
      height: 100px;
    }
    .texts p {
      top: 25vh;
    }
    .name-suraj {
      font-size: 40px;
    }
    .wrapper .icon {
      width: 50px;
      height: 50px;
      font-size: 25px;
    }

    .wrapper .tooltip {
      font-size: 10px;
    }
    .Download-button {
      height: 50px;
      width: 200px;
    }

    .Download-button svg {
      margin-right: 8px;
      width: 35px;
    }
    .words h1 {
      font-size: 23px;
    }
    .name-details {
      height: 15vh;
    }
  }
  @media (max-width: 391px) {
    .name-suraj {
      font-size: 30px;
    }
    .words h1 {
      font-size: 20px;
    }
  }

  @media (max-height:690px){
    .texts{
      position: absolute;
      bottom: -40px;
    }
  }
`;

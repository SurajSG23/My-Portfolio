import React, { useState } from "react";
import styled from "styled-components";

const Projects = ({ isNavVisible }) => {
  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div className="react">
        <div>
          <h2>React Projects</h2>
        </div>
        <div className="cards">
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="titleContainer">
                <div className="title">
                  <p> Title </p>
                </div>
                <div className="git">
                  <button class="button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p class="text">Github</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="html">
        <div>
          {" "}
          <h2>HTML, CSS & JS Projects</h2>
        </div>
        <div className="cards"></div>
      </div>
    </MainContainer>
  );
};

export default Projects;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  top: 5vh;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  backdrop-filter: blur(6px);
  overflow-y: auto;
  border: 1px solid rgba(200, 123, 255, 0.1);
  border-radius: 10px;
  z-index: ${({ isNavVisible }) => (isNavVisible ? "-1" : "1")};
  color: #baf4ff;
  align-items: center;
  justify-content: space-evenly;

  .react,
  .html {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .cards {
    padding-top: 10px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
  }

  .card {
    position: relative;
    width: 370px;
    min-height: 250px;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 96.5%;
      height: 95%;
      object-fit: cover;
      z-index: 3;
      background: linear-gradient(transparent, black);
    }
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }

  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    filter: blur(10px);
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

  .card:hover .content {
    transform: scale(1);
    bottom: 6px;
  }

  .content .titleContainer {
    display: flex;
    position: relative;
    min-width: 360px;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px 0px 10px;
    background: linear-gradient(transparent, #1b5efb 60%);
  }
  .title,
  .git {
    color: white;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.7em;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    gap: 8px;
    background-color: #181717;
    outline: 3px #181717 solid;
    outline-offset: -3px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 400ms;
  }

  .button .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }

  .button svg path {
    transition: 400ms;
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover .text {
    color: #181717;
  }

  .button:hover svg path {
    fill: #181717;
  }

  @media (max-width: 475px) {
    .content .titleContainer {
      background: none;
      min-width: 300px;
      padding: 40px 0px 0px 0px;
    }
    .title p {
      font-family: "Inter", sans-serif;
      font-weight: 900;
      color: white;
      text-shadow: 2px 4px 8px rgba(0, 123, 255, 0.6),
        0 0 10px rgba(0, 123, 255, 0.8);
      letter-spacing: 0.5px;
    }
  }
  
  @media (max-width: 419px) {
    .content .titleContainer {
      background: none;
      min-width: 300px;
      padding: 40px 30px 0px 30px;
    }
  }
`;

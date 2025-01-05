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
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="./Certificates/gssoc_certificate.png" alt="" />
            <b></b>
            <div class="content">
              <div class="title">
                {" "}
                <div>
                  <p> Title </p>
                </div>
                <div className="git">
                  <button>Github Repo</button>
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

  .content .title {
    position: relative;
    color: white;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(transparent, #1b5efb 60%);
    width: 357px;
    height: 90px;

    & p{
      position: absolute;
      bottom: 15px;
      left: 10px;
    }
    & .git button{
      position: absolute;
      bottom: 15px;
      right: 10px;
      cursor: pointer;
    }

  }

  .content .title span {
    font-weight: 300;
    font-size: 0.7em;
  }
`;

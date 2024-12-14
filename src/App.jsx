import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import Certificates from "./components/Certificates";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const starCount = 2; 
    const starsContainer = document.querySelector(".falling-stars");

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 1}s`; 
      star.style.animationDuration = `${4 + Math.random() * 3}s`; 
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <MainContainer>
      <video src="https://github.com/SurajSG23/My-Portfolio/blob/main/public/bg-video.mp4" loop muted></video>

      <Header setIsNavVisible={setIsNavVisible} />
      <div className="falling-stars"></div>
      <Routes>
        <Route path="/" element={<Intro isNavVisible={isNavVisible} />} />
        <Route path="/About" element={<About isNavVisible={isNavVisible} />} />
        <Route
          path="/Skills"
          element={<Skills isNavVisible={isNavVisible} />}
        />
        <Route
          path="/Achievements"
          element={<Certificates isNavVisible={isNavVisible} />}
        />
        <Route
          path="/Contact"
          element={<Contact isNavVisible={isNavVisible} />}
        />
      </Routes>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #000000,
    #1e3a8a
  );
  position: relative; 

  .falling-stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }
  .falling-stars .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 50%;
    animation: fallingStars 10s infinite linear,
      twinkle 1.5s infinite ease-in-out;
    opacity: 0;
    box-shadow: 0 0 4px 2px #ffffff; 
  }

  @keyframes fallingStars {
    0% {
      top: -10%;
      transform: rotate(45deg);
      opacity: 1;
    }
    100% {
      top: 100%;
      transform: rotate(45deg) translateX(0vw);
      opacity: 0;
    }
  }

  @keyframes twinkle {
    0% {
      opacity: 0.5;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const starCount = 50;
    const starsContainer = document.querySelector(".stars-container");

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${5 + Math.random() * 20}s`;
      starsContainer.appendChild(star);
    }

    const shootingStarCount = 5;
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting-star");
      shootingStar.style.left = `${Math.random() * 100}vw`;
      shootingStar.style.animationDuration = `${1 + Math.random() * 2}s`;
      starsContainer.appendChild(shootingStar);
    }
  }, []);

  return (
    <MainContainer>
      <Header setIsNavVisible={setIsNavVisible} />
      <div className="stars-container"></div>
      <Routes>
        <Route 
          path="/" 
          element={<Intro isNavVisible={isNavVisible} />} 
        />
        <Route 
          path="/About" 
          element={<About isNavVisible={isNavVisible} />} 
        />
        <Route
          path="/Skills"
          element={<Skills isNavVisible={isNavVisible} />}
        />
        <Route
          path="/Certifications"
          element={<Certificates isNavVisible={isNavVisible} />}
        />
        <Route
          path="/Contact"
          element={<Contact isNavVisible={isNavVisible} />}
        />
        <Route
          path="/Projects"
          element={<Projects isNavVisible={isNavVisible} />}
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
  background: linear-gradient(135deg, #000000, #1e3a8a);
  position: relative;

  .stars-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 50%;
    animation: twinkle 100s infinite alternate;
  }

  .shooting-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: linear-gradient(to right, #ffffff, #ffcc00);
    border-radius: 50%;
    box-shadow: 0 0 5px #ffcc00;
    animation: shooting 100s forwards, twinkle 100s infinite alternate;
  }

  @keyframes shooting {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(50vw);
      opacity: 0;
    }
  }

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

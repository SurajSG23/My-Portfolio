import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import Certificates from "./components/Certificates";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import bgVideo from "bg-video.mp4";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <MainContainer>
      <video id="video" loop autoPlay muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Header setIsNavVisible={setIsNavVisible} />
      <Routes>
        <Route path="/" element={<Intro isNavVisible={isNavVisible} />} />
        <Route path="/About" element={<About isNavVisible={isNavVisible} />} />
        <Route path="/Skills" element={<Skills isNavVisible={isNavVisible} />} />
        <Route path="/Achievements" element={<Certificates isNavVisible={isNavVisible} />} />
        <Route path="/Contact" element={<Contact isNavVisible={isNavVisible} />} />
      </Routes>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`;

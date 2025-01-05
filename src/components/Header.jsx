import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ setIsNavVisible }) => {
  const secondButtonRef = useRef(null);
  const [flag, setFlag] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const updateView = () => {
    setIsMobileView(window.innerWidth <= 990);
  };

  useEffect(() => {
    updateView();
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  const displayBurger = () => {
    if (!isMobileView) return;
    if (flag) {
      setFlag(false);
      document.getElementsByClassName("nav")[0].style.display = "none";
      setIsNavVisible(false);
    } else {
      setFlag(true);
      document.getElementsByClassName("nav")[0].style.display = "block";
      setIsNavVisible(true);
    }
  };

  const handleFirstButtonClick = () => {
    secondButtonRef.current.click();
  };

  return (
    <MainContainer>
      <Link to="/" className="logo"></Link>
      <div className="nav">
        <ul>
          <Link to="/" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              Home
            </p>
          </Link>
          <Link to="/About" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              About
            </p>
          </Link>
          <Link to="/Skills" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              Skills
            </p>
          </Link>
          <Link to="/Projects" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              Projects
            </p>
          </Link>
          <Link to="/Certifications" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              Certifications
            </p>
          </Link>
          <Link to="/Contact" style={{ all: "unset" }}>
            <p
              className="hover-underline-animation center"
              onClick={handleFirstButtonClick}
            >
              Contact
            </p>
          </Link>
        </ul>
      </div>
      {isMobileView && (
        <div className="hamburger">
          <input
            id="checkbox2"
            type="checkbox"
            onClick={displayBurger}
            ref={secondButtonRef}
          />
          <label className="toggle toggle2" htmlFor="checkbox2">
            <div id="bar4" className="bars"></div>
            <div id="bar5" className="bars"></div>
            <div id="bar6" className="bars"></div>
          </label>
        </div>
      )}
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  width: 100vw;
  height: 10vh;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(178, 71, 255, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 15px;
  align-items: center;
  .logo {
    position: relative;
    background: url("suraj-logo.png") no-repeat center/contain;
    min-width: 200px;
    height: 60px;
    animation: dp 0.4s linear;
    filter: drop-shadow(1px 1px 4px purple);
  }
  .nav {
    position: relative;
    display: flex;
    gap: 10px;
    & ul {
      display: flex;
      gap: 40px;
      font-size: 20px;
      font-weight: 500;
      color: #5de4ff;
      animation: dp 0.5s linear;
      & p {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.15);
        }
      }
    }
  }

  #checkbox2 {
    display: none;
  }
  .hamburger {
    display: none;
  }
  .toggle2 {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 100%;
    height: 6px;
    background-color: rgb(92, 176, 255);
    border-radius: 6px;
  }

  #bar5 {
    transition-duration: 0.8s;
  }

  #bar4,
  #bar6 {
    width: 80%;
  }

  #checkbox2:checked + .toggle2 .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox2:checked + .toggle2 #bar5 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox2:checked + .toggle2 #bar4 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox2:checked + .toggle2 #bar6 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox2:checked + .toggle2 {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }

  @keyframes dp {
    from {
      transform: translateY(0px);
      opacity: 0.1;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transition: transform 0.25s ease-out;
  }
  .hover-underline-animation.center::after {
    transform-origin: bottom center;
  }

  .hover-underline-animation.center:hover::after {
    transform-origin: bottom center;
  }
  .hover-underline-animation:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 990px) {
    justify-content: space-between;
    .nav {
      position: absolute;
      flex-direction: column;
      top: 10vh;
      right: 0;
      width: 100vw;
      height: auto;
      background: linear-gradient(
        rgba(130, 0, 206, 0.892) 40%,
        rgba(0, 102, 255, 0.952)
      );
      display: none;
      border-radius: 8px;
      & ul {
        flex-direction: column;
        align-items: center;
        margin: 10px 0 10px 0;
        font-size: 30px;
      }
    }
    .hamburger {
      display: block;
    }
    button {
      line-height: 50px;
      min-width: 100%;
    }
  }
`;

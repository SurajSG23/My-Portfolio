import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
const Certificates = ({ isNavVisible }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(false);
  const previewCertificate = () => {
    setSelectedCertificate(!selectedCertificate);
  };

  

  const certificates = [
    {
      title: "VEDHA-Hackathon",
      id: 1,
      description:
        "VEDHA (VVCE EduTech Hackathon) was a national-level competition where our team, CODE BLOODED, ranked among the top 34 teams out of 110+ participants. Our project, SkillConnect, is a platform that enhances job readiness with an AI Interview Tool, a Learning Hub, and an automated Resume Generator.",
      image: "Certificates/Hackathon_Vedha.png",
    },
    {
      title: "Internship Training Certificate",
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/IntrnForte_Training.png",
    },
    {
      title: "Internship Completion Certificate",
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/IntrnForte_Completion.png",
    },
    {
      title: "GSSoC Participation Certificate",
      id:4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/gssoc_participation.png",
    },
    {
      title: "GSSoC Achievement Certificate ",
      id:5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/gssoc_certificate.png",
    },
    {
      title: "HTML, CSS & JS Completion Certificate",
      id:6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/Udemy_Web.png",
    },
    {
      title: "Python Completion Certificate",
      id:7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/Python_Linkedin.png",
    },
    {
      title: "Chat GPT For Excel",
      id:8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/ChatGPT_Excel.png",
    },
    {
      title: "ChatGPT and AI Tools Workshop",
      id:9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/ChatGPT_SkillNation.png",
    },
    {
      title: "ChatGPT and AI Tools ",
      id:10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/ChatGPT_be10x.png",
    },
    {
      title: "API Student Expert Postman",
      id:11,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "Certificates/API_StudentExpert.png",
    },
  ];
  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div className="cert-cont">
        {certificates.map((certificate) => {
          return (
            <div className="card">
              <img src={certificate.image} alt="" />
              <div className="card__content">
                <h3 className="card__title">{certificate.title}</h3>
                <p className="card__description">{certificate.description}</p>
                <button onClick={previewCertificate} className="pre">
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">Preview</span>
                </button>
              </div>
            </div>
          );
        })}
        <div
          className="preview"
          style={{ visibility: selectedCertificate ? "visible" : "hidden" }}
        >
          <div style={{ position: "absolute", right: "0", padding: "10px" }}>
            <RxCross2
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={previewCertificate}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <div className="certificate-img">
            <img src="./gssoc.png" alt="Google Drive Image" />
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              mollitia dolor quaerat at debitis sed impedit consequatur iste
              fugiat assumenda tempore maxime eveniet aut aspernatur harum
              recusandae unde iure modi voluptatibus voluptates, nemo vitae nam
              sit quas! Soluta ut molestiae dolorum, voluptate alias quo totam
              maxime sit?
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Certificates;

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

  button {
    font-size: 17px;
    padding: 0.5em 1.3em;
    font-weight: 500;
    background: #1f2937;
    color: white;
    border: none;
    position: absolute;
    right: 1em;
    bottom: 1em;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
  }

  .label {
    position: relative;
    top: -1px;
  }

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(49, 63, 254, 0.7);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  button:hover .transition {
    width: 14em;
    height: 14em;
  }

  button:active {
    transform: scale(0.97);
  }

  .preview {
    width: 70vw;
    height: 80vh;
    background: linear-gradient(135deg, #00264d, #005a99, #008cff);
    position: absolute;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .certificate-img {
    width: 100%;
    height: 80%;
    top: 5vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & img {
      width: 90%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .desc {
    bottom: 0;
    position: absolute;
    width: 90%;
    text-align: center;
    margin: 8px auto;
    margin-left: 50px;
    color: white;
  }
  .cert-cont {
    width: 85vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    overflow-y: auto;
  }
  .card {
    cursor: pointer;
    position: relative;
    width: 370px;
    min-height: 250px;
    background-color: #f2f2f234;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 3px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: 20px 25px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #27c9ff, #0067b0);

    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 2px 0 0;
    font-size: 14px;
    color: white;
    line-height: 1.4;
  }

  @media (max-width: 990px) {
    .pre {
      display: none;
    }
  }
`;

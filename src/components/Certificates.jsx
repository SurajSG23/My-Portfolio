import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
const Certificates = ({ isNavVisible }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(false);
  const previewCertificate = (id) => {
    setSelectedCertificate(!selectedCertificate);
    setSrc(certificates[id - 1].image);
    setDesc(certificates[id - 1].description);
  };

  const [src, setSrc] = useState("Certificates/Hackathon_Vedha.png");
  const [desc, setDesc] = useState(
    "VEDHA (VVCE EduTech Hackathon) was a national-level competition where our team, CODE BLOODED, ranked among the top 34 teams out of 110+ participants. Our project, SkillConnect, is a platform that enhances job readiness with an AI Interview Tool, a Learning Hub, and an automated Resume Generator."
  );

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
        "As a Full Stack Web Development intern at IntrnForte, I developed an Open Source Job Portal and Ecommerce Product Listing, focusing on both front-end and back-end tasks. These projects helped me refine my skills in real-world applications.",
      image: "Certificates/IntrnForte_Training.png",
    },
    {
      title: "Internship Completion Certificate",
      id: 3,
      description:
        "As a Full Stack Web Development intern at IntrnForte, I developed an Open Source Job Portal and Ecommerce Product Listing, focusing on both front-end and back-end tasks. These projects helped me refine my skills in real-world applications.",
      image: "Certificates/IntrnForte_Completion.png",
    },
    {
      title: "GSSoC Participation Certificate",
      id: 4,
      description:
        "Contributed to open-source projects during GirlScript Summer of Code, focusing on impactful code enhancements and community collaboration. Achieved a top 227 rank out of 3900+ participants, showcasing commitment and technical skills.",
      image: "Certificates/gssoc_participation.png",
    },
    {
      title: "GSSoC Achievement Certificate ",
      id: 5,
      description:
        "Contributed to open-source projects during GirlScript Summer of Code, focusing on impactful code enhancements and community collaboration. Achieved a top 227 rank out of 3900+ participants, showcasing commitment and technical skills.",
      image: "Certificates/gssoc_certificate.png",
    },
    {
      title: "HTML, CSS & JS Completion Certificate",
      id: 6,
      description:
        "Earned a Completion Certificate in HTML, CSS, and JavaScript through Udemy, mastering foundational web development skills essential for creating responsive and interactive websites..",
      image: "Certificates/Udemy_Web.png",
    },
    {
      title: "Python Completion Certificate",
      id: 7,
      description:
        "Earned a Completion Certificate in Python from LinkedIn Learning, gaining expertise in Python programming fundamentals and its practical applications.",
      image: "Certificates/Python_Linkedin.png",
    },
    {
      title: "Chat GPT For Excel",
      id: 8,
      description:
        "Completed the \"ChatGPT for Excel\" course from Great Learning, learning to enhance productivity and streamline workflows using AI-powered tools in Excel.",
      image: "Certificates/ChatGPT_Excel.png",
    },
    {
      title: "ChatGPT and AI Tools Workshop",
      id: 9,
      description:
        "Attended the \"ChatGPT and AI Tools Workshop\" conducted by Skill Nation, gaining insights into leveraging AI tools to boost productivity and efficiency.",
      image: "Certificates/ChatGPT_SkillNation.png",
    },
    {
      title: "ChatGPT and AI Tools ",
      id: 10,
      description:
        "Completed \"ChatGPT and AI Tools\" training by Be10x, focusing on using AI tools for enhancing workflow and problem-solving efficiency",
      image: "Certificates/ChatGPT_be10x.png",
    },
    {
      title: "API Student Expert Postman",
      id: 11,
      description:
        "Certified as an API Student Expert by Postman, demonstrating proficiency in designing, testing, and documenting APIs effectively.",
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
                <button
                  onClick={() => previewCertificate(certificate.id)}
                  className="pre"
                >
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
            <img src={src} alt="Google Drive Image" />
          </div>
          <div className="desc">
            <p>{desc}</p>
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
    background: linear-gradient(135deg, #27c9ff, #00497d);

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
    .card {
      width: 420px;
    }
  }
`;

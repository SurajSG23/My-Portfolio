/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";

const Contact = ({ isNavVisible }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [msgSent, setMsgSent] = useState(true);
  const sendEmail = (e) => {
    setMsgSent(false);
    e.preventDefault();

    const templateParams = {
      to_name: "Suraj S G",
      from_name: name,
      from_email: email,
      message: msg,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then((response) => {
        alert(
          "Thank you for reaching out! I will get back to you soon.",
          response
        );
        setName("");
        setMsg("");
        setEmail("");
        setMsgSent(true);
      })
      .catch((error) => {
        alert("FAILED...", error);
      });
  };

  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div class="main">
        <div class="up">
          <a href="https://www.instagram.com/suraj_sg23/" target="_blank">
            <button class="card1">
              <svg
                class="instagram"
                fill-rule="nonzero"
                height="45px"
                width="45px"
                viewBox="0,0,256,256"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  style={{ mixBlendMode: "normal" }}
                  textAnchor="none"
                  fontSize="none"
                  fontWeight="none"
                  fontFamily="none"
                  strokeDashoffset="0"
                  strokeDasharray=""
                  strokeMiterlimit="10"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  strokeWidth="1"
                  stroke="none"
                  fillRule="nonzero"
                >
                  <g transform="scale(8,8)">
                    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-s-g-dhanva-995a23298/"
            target="_blank"
          >
            <button class="card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="twitter"
                height="40px"
                width="40px"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
              </svg>
            </button>
          </a>
        </div>
        <div class="down">
          <a href="https://github.com/SurajSG23" target="_blank">
            <button class="card3">
              <svg
                class="github"
                height="40px"
                width="40px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=surajsgd23@gmail.com" target="_blank">
            <button class="card4">

                <SiGmail className="gmail"/>
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="container">
          <form className="form" onSubmit={sendEmail}>
            <div className="descr">Contact Me</div>
            <div className="input">
              <input
                autoComplete="off"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label for="name">Name</label>
            </div>
            <div className="input">
              <input
                autoComplete="off"
                name="email"
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label for="email">E-mail</label>
            </div>
            <div className="input">
              <textarea
                cols="30"
                rows="1"
                id="message"
                required
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
              ></textarea>
              <label for="message">Message</label>
            </div>
            <div>
              <button>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    {msgSent ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    ) : (
                      <div class="loading-spinner"></div>
                    )}
                  </div>
                </div>
                <span>{msgSent ? "Send" : "Sending..."}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default Contact;

const MainContainer = styled.div`
  position: relative;
  display: flex;
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
  a {
    all: unset;
  }
  .form button {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    margin: -10px auto;
  }

  .form button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  .form button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  .form button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  .form button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  .form button:hover span {
    transform: translateX(5em);
  }

  .form button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }

  .container {
    width: 30vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 3px;
    border: 1px solid #396afc;
    backdrop-filter: blur(30px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .container form .descr {
    font-size: 30px;
    font-weight: 500;
    color: #e8e8e8;
    margin-bottom: 25px;
    margin-top: 60px;
    text-align: center;
  }
  .input,
  textarea {
    margin: 3em 0 1em 0;
    width: 28vw;
    position: relative;
  }

  .input input,
  textarea {
    font-size: 100%;
    padding: 0.7em;
    outline: none;
    color: #e8e8e8;
    border: none;
    border-bottom: 2px solid #e8e8e8;
    background: transparent;
    border-radius: none;
    width: 100%;
    resize: none;
  }

  .input label {
    font-size: 100%;
    position: absolute;
    left: 0;
    color: #e8e8e8;
    padding: 0.9em;
    margin-left: 0.1em;
    pointer-events: none;
    transition: all 0.5s ease;
    text-transform: uppercase;
  }

  .input :is(input:focus, input:valid) ~ label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.4em;
    background: transparent;
  }

  .input textarea:focus ~ label,
  .input textarea:valid ~ label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.4em;
    background: transparent;
  }

  .inputGroup :is(input:focus, input:valid) {
    border-color: rgb(37, 37, 211);
  }

  .form button {
    font-size: 20px;
    align-self: flex-start;
    padding: 0em;
    border: none;
    cursor: pointer;
    margin-bottom: 50px;
    background: transparent;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  .form button:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .loading-spinner {
    width: 30px;
    height: 30px;
    border: 4px solid transparent;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .form button:hover:before {
    opacity: 0.2;
  }

  .form button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .card1 {
    width: 120px;
    height: 120px;
    outline: none;
    border: 4px solid blue;
    background: white;
    background-color: #5de4ff;
    border-radius: 120px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .instagram {
    margin-top: 1.5em;
    margin-left: 1.2em;
    fill: red;
  }

  .card2 {
    width: 120px;
    height: 120px;
    outline: none;
    background: white;
    background-color: #5de4ff;
    border: 4px solid blue;
    border-radius: 5px 120px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .twitter {
    margin-top: 1.5em;
    margin-left: -0.9em;
    fill: blue;
  }

  .card3 {
    width: 120px;
    height: 120px;
    outline: none;
    border: 4px solid blue;
    background: white;
    background-color: #5de4ff;
    border-radius: 5px 5px 5px 120px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .github {
    margin-top: -0.6em;
    margin-left: 1.2em;
  }

  .card4 {
    width: 120px;
    height: 120px;
    outline: none;
    border: 4px solid blue;
    background: white;
    background-color: #5de4ff;
    border-radius: 5px 5px 120px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .gmail {
    margin-top: -0.3em;
    margin-left: -0.3em;
    color: #ea4335;
    font-size: 33px;
  }
  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: red;
    border: 2px solid blue;
    box-shadow: 1px 1px 0px #eeb1de, 2px 2px 0px #d365b6, 3px 3px 0px #d365b6,
      4px 4px 0px #d365b6, 5px 5px 0px #d365b6;
  }

  .card1:hover .instagram {
    fill: white;
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03a9f4;
    box-shadow: 1px 1px 0px #a1defa, 2px 2px 0px #41bef8, 3px 3px 0px #41bef8,
      4px 4px 0px #41bef8, 5px 5px 0px #41bef8;
  }

  .card2:hover .twitter {
    fill: white;
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
    box-shadow: 1px 1px 0px rgb(124, 123, 123), 2px 2px 0px #333,
      3px 3px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
  }

  .card3:hover .github {
    fill: white;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #ea4335;;
    box-shadow: 1px 1px 0px #bdc2e2, 2px 2px 0px #9ca6e0, 3px 3px 0px #9ca6e0,
      4px 4px 0px #9ca6e0, 5px 5px 0px #9ca6e0;
  }

  .card4:hover .gmail {
    fill: white;
  }

  .card1,
  .card2,
  .card3,
  .card4 {
    box-shadow: 1px 1px 0px rgb(179, 175, 175), 2px 2px 0px rgb(179, 175, 175),
      3px 3px 0px rgb(179, 175, 175), 4px 4px 0px rgb(179, 175, 175),
      5px 5px 0px rgb(179, 175, 175);
  }

  @media (max-width: 990px) {
    flex-direction: column-reverse;
    overflow-y: scroll;
    gap: 10px;
    .main {
      display: none;
    }
    .container {
      width: 80vw;
      height: auto;
    }
    .input,
    textarea {
      margin: 1em 0 1em 0;
      width: 60vw;
      position: relative;
    }
    .form button {
      font-size: 20px;
    }
  }
`;

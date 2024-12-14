import React from "react";
import styled from "styled-components";
const Contact = ({ isNavVisible }) => {
  return (
    <MainContainer isNavVisible={isNavVisible}>
      <div></div>
      <div>
        <div className="container">
          <form className="form">
            <div className="descr">Contact Me</div>
            <div className="input">
              <input autoComplete="off" type="text" required />
              <label for="name">Name</label>
            </div>
            <div className="input">
              <input autoComplete="off" name="email" type="text" required />
              <label for="email">E-mail</label>
            </div>
            <div className="input">
              <textarea cols="30" rows="1" id="message" required></textarea>
              <label for="message">Message</label>
            </div>
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
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
                </div>
              </div>
              <span>Send</span>
            </button>
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
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  top: 5vh;
  padding: 10px 0 10px 0;
  backdrop-filter: blur(6px);
  overflow-y: auto;
  border: 1px solid rgba(200, 123, 255, 0.1);
  border-radius: 10px;
  z-index: ${({ isNavVisible }) => (isNavVisible ? "-1" : "1")};
  color: #baf4ff;
  align-items: center;

  button {
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
    margin: -30px auto;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
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
    width: 350px;
    height: 400px;
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
    font-size: 20px;
    font-weight: 500;
    color: #e8e8e8;
    margin-bottom: 25px;
    margin-top: 60px;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .input,
  textarea {
    margin: 1em 0 1em 0;
    width: 300px;
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
    padding: 0.7em;
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
    padding: 0.6em;
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

  .form button:hover:before {
    opacity: 0.2;
  }

  .form button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

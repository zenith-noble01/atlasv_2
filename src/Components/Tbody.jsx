import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { thermodynamics } from "../Images";

function Tbody() {
  return (
    <Container>
      <div className="main-content">
        <Greeting>
          <div className="profile-image">
            <BsPersonCircle />
          </div>
          <div className="content">
            <h1>MBAKU</h1>
            <p>
              If you are planning for a year, sow rice; if you are planning for
              a decade, plant trees; if you are planning for a lifetime, educate
              people.
            </p>
          </div>
        </Greeting>
        <div className="courses">
          <div className="videos">
            <p>Videos</p>
            <div className="grid">
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="doc">
            <p>Questions</p>
            <div className="grid">
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
              <div>
                <img src={thermodynamics} />
                <div className="nav">
                  <h2>Thermodynamics</h2>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-content">content</div>
    </Container>
  );
}

export default Tbody;

const Container = styled.div`
  display: flex;
  .main-content {
    width: 60%;
    height: 100%;
    padding: 0.25cm 0.5cm;
    .courses {
      background-color: #cae7b8;
      width: 100%;
      height: 10cm;
      margin-top: 0.25cm;
      padding: 0 0.5cm;
      display: flex;
      flex-direction: column;
      .videos {
        margin-bottom: 0.5cm;
      }
      .videos,
      .doc {
        display: flex;
        flex-direction: column;
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0.5cm;
          margin-bottom: 0.25cm;
          cursor: pointer;
          &:hover {
            div {
              background-color: black;
              color: white;
              button {
                background-color: white;
                color: black;
                border-color: black;
              }
            }
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: end;
            background: #d9d9d9;
            width: 3.5cm;
            height: 3.5cm;
            box-shadow: -1px 3px 48px -15px rgba(0, 0, 0, 0.75);
            img {
              width: 100%;
              height: 100%;
            }
            .nav {
              h2 {
                font-size: 0.7em;
              }
              button {
                width: 50%;
                align-self: flex-end;
                background-color: black;
                color: white;
                border: 1px solid transparent;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .side-content {
    width: 30%;
    height: 100%;
    background-color: red;
    margin-left: 1cm;
  }
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  padding: 0.5cm;
  border-radius: 15px;
  background-color: #616161;
  .profile-image {
    width: 20%;
    height: 50%;
    svg {
      width: 100%;
      height: 100%;
      color: white;
    }
  }
  .content {
    width: 80%;
    color: white;
  }
`;

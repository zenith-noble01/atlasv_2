import React from "react";
import styled from "styled-components";
import { register } from "../Images";
import { LoginBox } from "../Components";

function CreateAccount() {
  return (
    <Container className="account">
      <div className="main-box">
        <div className="box-1">
          <div className="box-image">
            <img src={register} alt="" />
          </div>
          <div className="box-text">
            <main>
              <h1>A</h1>
              <h4>tlas</h4>
              <p>
                Providing a set of tools to help students attain their maximum
                potential
              </p>
            </main>
          </div>
        </div>
        <div className="box-2">
          <LoginBox />
        </div>
      </div>
    </Container>
  );
}

export default CreateAccount;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-box {
    display: flex;
    width: 60%;
    min-height: 80%;
    background: white;
    box-shadow: -9px -11px 141px -42px rgba(0, 0, 0, 0.45);
    border-radius: 15px;
    .box-1,
    .box-2 {
      width: 50%;
    }

    .box-1 {
      position: relative;
      .box-image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
      }
      .box-text {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 2;
        color: white;
        display: flex;
        justify-content: center;

        h1 {
          font-size: 10em;
          font-family: italiana;
        }
        h4 {
          position: absolute;
          top: 75%;
          left: 39%;
          font-size: 2em;
          letter-spacing: 0.4cm;
          text-align: center;
          font-family: italiana;
        }
        p {
          position: absolute;
          width: 90%;
          left: 5%;
          align-items: center;
        }
      }
    }
  }
`;

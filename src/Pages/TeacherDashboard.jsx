import React from "react";
import styled from "styled-components";
import { TsideBar, Theader, Tbody } from "../Components";

function TeacherDashboard() {
  return (
    <Container>
      <TsideBar />
      <div className="right-Bar">
        <div className="header-div">
          <Theader />
        </div>
        <div className="content-div">
          <Tbody />
        </div>
      </div>
    </Container>
  );
}

export default TeacherDashboard;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #616161;
  padding: 0.5cm;
  display: flex;
  justify-content: center;
  align-items: center;
  .right-Bar {
    width: 85%;
    height: 100vh;
    .header-div {
      width: 100%;
      height: 10vh;
    }
    .content-div {
      width: 90%;
      height: 80vh;
      background: white;
      margin-left: 1cm;
      border-radius: 0.5cm;
    }
  }
`;

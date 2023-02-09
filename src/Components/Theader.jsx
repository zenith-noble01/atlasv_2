import React from "react";
import styled from "styled-components";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Theader() {
  return (
    <Container>
      <div className="profile">
        <MdOutlineNotificationsActive />
        <CgProfile />
        <h1>Mbaku</h1>
      </div>
    </Container>
  );
}

export default Theader;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2cm;
    width: 20%;
    margin-top: 0.25cm;
    svg {
      width: 1cm;
      height: 1cm;
    }
  }
`;

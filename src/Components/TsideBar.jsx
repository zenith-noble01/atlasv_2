import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdForum } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";

function TsideBar() {
  return (
    <Container>
      <div className="logo">
        <h1>A</h1>
        <h4>tlas</h4>
      </div>
      <div className="dash-btn">
        <MdDashboard />
        Dashboard
      </div>
      <div className="other-links">
        <NavLinkToPage to="/">
          <AiFillHome />
          start a class
        </NavLinkToPage>
        <NavLinkToPage to="/">
          <BsFillJournalBookmarkFill />
          Lectures
        </NavLinkToPage>
        <NavLinkToPage to="/">
          <GoPerson />
          Assessments
        </NavLinkToPage>
        <NavLinkToPage to="/">
          <MdForum />
          Forum
        </NavLinkToPage>
      </div>
      <div className="feedback-container">
        <RiFeedbackFill />
        Feedback
      </div>
    </Container>
  );
}

export default TsideBar;

const Container = styled.div`
  color: white;
  width: 15%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    position: relative;
    h1,
    h4 {
      font-family: italiana;
    }
    h1 {
      font-size: 7em;
      margin: 0;
    }
    h4 {
      position: absolute;
      top: 70%;
      font-size: 2.5em;
      left: 0.25%;
      letter-spacing: 5px;
    }
  }

  .dash-btn,
  .feedback-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    margin-top: 1cm;
    color: black;
    background-color: white;
    padding: 0.25cm 0.5cm;
    border-radius: 10px;
    cursor: pointer;
    svg {
      margin-right: 15px;
      width: 0.8cm;
      height: 0.8cm;
      color: black;
    }
    &:hover {
      background-color: black;
      color: white;
      svg {
        color: white;
      }
    }
  }
  .other-links {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`;

const NavLinkToPage = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  margin-top: 0.5cm;
  padding: 0.25cm 0.5cm;
  border-radius: 10px;
  svg {
    margin-right: 15px;
    width: 0.8cm;
    height: 0.8cm;
    color: white;
  }
  &:hover {
    color: black;
    background-color: white;
    svg {
      color: black;
    }
  }
`;

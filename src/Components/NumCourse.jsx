import React from "react";
import styled from "styled-components";

function NumCourse() {
  return (
    <Container>
      <Course courseNum="11" courseContent="Courses completed" />
      <Course courseNum="4" courseContent="Courses in progress" />
    </Container>
  );
}

function Course(props) {
  return (
    <CourseContainer>
      <h1>{props.courseNum}</h1>
      <p>{props.courseContent}</p>
    </CourseContainer>
  );
}

export default NumCourse;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.8cm;
`;

const CourseContainer = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
  border: 2px solid transparent;
  padding: 0 0.2cm;
  background-color: #f5f5f7;
  border-radius: 15px;
  margin: 0.25cm;
  cursor: pointer;
  h1 {
    width: 50%;
    font-size: 4em;
  }
  p {
    width: 50%;
    font-size: 0.8em;
  }
  &:hover {
    background-color: black;
    h1,
    p {
      color: white;
    }
  }
`;

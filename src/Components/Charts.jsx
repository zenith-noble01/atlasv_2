import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { mapFile } from "../Constants/dummy";
import { book } from "../Images";

function Charts() {
  return (
    <Container>
      <h1>Your Statistics</h1>
      <Titlelinks>
        <h3>Learning hours</h3>
        <h3>My courses</h3>
      </Titlelinks>
      <ChartContainer>
        <Chart
          options={mapFile.options}
          series={mapFile.series}
          type="line"
          width="500"
        />
      </ChartContainer>
      <Productivity>
        <div className="text">
          <h1>Be more Productive</h1>
          <p>
            Unlock your study and perfomance level report only for $9.99 per
            month.
          </p>
          <button>Go Premium</button>
        </div>
        <div className="image">
          <img src={book} alt="book" />
        </div>
      </Productivity>
    </Container>
  );
}

export default Charts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25cm;
`;

const Titlelinks = styled.nav`
  display: flex;
  h3 {
    margin: 0.5cm;
  }
`;

const ChartContainer = styled.div``;

const Productivity = styled.div`
  background-color: #f5f5f7;
  display: flex;
  align-items: center;
  padding: 0.5cm;
  border-radius: 0.5cm;
  .text {
    width: 65%;
    margin-right: 10px;
  }
  .images {
    width: 30%;
    margin-left: 0.25cm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    background-color: black;
    height: 40px;
    border: none;
    outline-color: transparent;
    padding: 0 2.5rem;
    color: var(--primary-color);
    font-weight: bold;
    cursor: pointer;
    border-radius: 14px;
    margin-top: 0.25cm;
  }
`;

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import styled from "styled-components";

function SearchBox({ user }) {
  return (
    <Container className="search-box">
      <div className="input-part">
        <BiSearchAlt2 className="input-icons" />
        <input type="text" />
      </div>
      <div className="notification-part">
        <MdOutlineNotificationsActive />
      </div>
      <div className="profile-part">
        <img src={user?.profilePic} alt="profile" />
      </div>
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 1cm;
  }

  img {
    height: 40px;
    width: 40px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
  }
  .input-part {
    background-color: var(--light-color);
    border-radius: 5px;
    display: flex;
    align-items: center;

    input {
      border: none;
      background-color: var(--light-color);
      padding-left: 1cm;
    }

    .notification-part {
      margin-right: 0.5cm;
    }
  }
`;

import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="disney+ logo" />
      <NavMenu>
        <a href="/">
          <img src="./images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </a>

        <a href="/">
          <img src="./images/search-icon.svg" alt="Home Icon" />
          <span>SEARCH</span>
        </a>

        <a href="/">
          <img src="./images/watchlist-icon.svg" alt="Home Icon" />
          <span>WATCHLIST</span>
        </a>

        <a href="/">
          <img src="./images/original-icon.svg" alt="Home Icon" />
          <span>ORIGINALS</span>
        </a>

        <a href="/">
          <img src="./images/movie-icon.svg" alt="Home Icon" />
          <span>MOVIES</span>
        </a>

        <a href="/">
          <img src="./images/series-icon.svg" alt="Home Icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/dp.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  box-shadow: 0 4px 10px black;
`;

const Logo = styled.img`
  width: 70px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
        opacity: 0;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

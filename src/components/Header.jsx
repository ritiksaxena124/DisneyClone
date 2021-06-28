import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      {!userName ? (
        <LoginUser>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginUser>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </Link>

            <Link to="">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </Link>

            <Link to="">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </Link>

            <Link to="">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </Link>

            <Link to="">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </Link>

            <Link to="">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
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
  overflow-x: hidden;
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
const LoginUser = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Login = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid white;
  transition: all 250ms ease 0s;
  background: rgba(0, 0, 0, 0, 6);

  &:hover {
    background: #f9f9f9;
    color: black;
  }
`;

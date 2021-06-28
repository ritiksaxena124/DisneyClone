import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <Content>
          <Logo src="./images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <Logo src="./images/cta-logo-Two.png" />
        </Content>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    background: url("./images/login-background.jpg") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 80%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Logo = styled.img``;

const SignUp = styled.a`
  cursor: pointer;
  padding: 17px 0px;
  text-align: center;
  background: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  margin-top: 7px;
  font-size: 18px;
  letter-spacing: 1.42px;
  transition: all 250ms;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1.42px;
  font-size: 12px;
`;

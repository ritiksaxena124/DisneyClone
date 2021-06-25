import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <>
      <Container>
        <Wrap>
          <img src="./images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="./images/viewers-marvel.png" />
        </Wrap>
        <Wrap>
          <img src="./images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="./images/viewers-starwars.png" />
        </Wrap>
        <Wrap>
          <img src="./images/viewers-national.png" />
        </Wrap>
      </Container>
    </>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

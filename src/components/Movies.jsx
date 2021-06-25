import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <>
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          <Wrap>
            <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/LOKI.png" />
          </Wrap>

          <Wrap>
            <img src="https://qph.fs.quoracdn.net/main-qimg-dcdc086f03ef43148dff63f176d48ebe" />
          </Wrap>

          <Wrap>
            <img src="https://thathashtagshow.com/wp-content/uploads/2020/01/eternals-logo1.jpg" />
          </Wrap>

          <Wrap>
            <img src="https://thedirect.s3.amazonaws.com/media/article_full/thormusic.jpg" />
          </Wrap>
        </Content>
      </Container>
    </>
  );
};

export default Movies;

const Container = styled.div`
  margin-bottom: calc(3.5vh + 5px);
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;

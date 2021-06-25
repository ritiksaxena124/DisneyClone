import React from "react";
import styled from "styled-components";
const Detail = () => {
  return (
    <>
      <Container>
        <Background>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
        </Background>

        <ImgTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
        </ImgTitle>

        <Controls>
          <PlayButton>
            <img src="./images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="./images/play-icon-white.png" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupButton>
            <img src="./images/group-icon.png" />
          </GroupButton>
        </Controls>
        <SubTitle>2018 * 7m * Family, Fantasy, Kids, Animation</SubTitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Description>
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 24px;
  background: rgb(249, 249, 249);
  border: none;
  border-radius: 4px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: 1px solid rgb(249, 249, 249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  margin-right: 16px;
  span {
    font-size: 30px;
    color: #eee;
  }
`;
const GroupButton = styled(AddButton)`
  background: black;
`;

const SubTitle = styled.div`
  margin-top: 25px;
  color: rgb(249, 249, 249, 0.8);
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 20px;
  color: rgb(249, 249, 249, 0.8);
  margin-top: 15px;
`;

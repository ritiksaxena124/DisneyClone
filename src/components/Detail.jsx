import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    //grab the movie info from db
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save movie data
          setMovie(doc.data());
        } else {
          //redirect to home page
        }
      });
  }, [id]);

  return (
    <>
      <Container>
        {movie && (
          <>
            <Background>
              <img src={movie.backgroundImg} alt="" />
            </Background>

            <ImgTitle>
              <img src={movie.titleImg} alt="" />
            </ImgTitle>

            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupButton>
                <img src="/images/group-icon.png" alt="" />
              </GroupButton>
            </Controls>
            <SubTitle>{movie.subTitle}</SubTitle>
            <Description>{movie.description} </Description>
          </>
        )}
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  margin-top: 60px;
`;

const Background = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;
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
  margin-top: 25px;
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
const GroupButton = styled(AddButton)``;

const SubTitle = styled.div`
  margin-top: 25px;
  color: rgb(249, 249, 249, 0.8);
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 19px;
  color: rgb(249, 249, 249, 0.8);
  margin-top: 15px;
  max-width: 700px;
`;

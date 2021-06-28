import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Movies = () => {
  const movies = useSelector(selectMovies);
  return (
    <>
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          {movies &&
            movies.map((movie) => {
              return (
                <>
                  <Wrap key={movie.id}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.cardImg} alt="posters" />
                    </Link>
                  </Wrap>
                </>
              );
            })}
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

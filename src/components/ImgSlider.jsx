import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <img src="./images/slider-badging.jpg" alt=""/>
        </Wrap>
        <Wrap>
          <img src="./images/slider-badag.jpg" alt=""/>
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt=""/>
        </Wrap>
        <Wrap>
          <img src="./images/slider-scales.jpg" alt=""/>
        </Wrap>
      </Carousel>
    </>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 20px;

  .slick-list {
    overflow: visible;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #eee;
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border-radius: 4px;
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 4px solid transparent;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      border: 4px solid #fff;
    }
  }
`;

import React from "react";
import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { carouselList } from "config";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  console.log(props);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default function Slick() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow style={styles["slick-prev"]} />,
    nextArrow: <NextArrow style={styles["slick-next"]} />,
  };
  return (
    <Slider {...settings}>
      {carouselList.map((item) => (
        <div key={item._id}>
          <img
            className={styles["carousel-image"]}
            src={item.image}
            alt="slider"
          />
        </div>
      ))}
    </Slider>
  );
}

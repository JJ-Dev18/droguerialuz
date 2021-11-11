import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow_rigth" style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} size="2x"></FontAwesomeIcon>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow_left"
      style={{ ...style, zIndex: 2 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x"></FontAwesomeIcon>
    </div>
  );
}


export default function Carousel(props) {
  var settings = {
    dots: props.dots,
    infinite: true,
    speed: 500,
    slidesToShow: props.slide,
    slidesToScroll: 1,
    // customPaging: i => (
    //     <button
    //       style={{
    //         width: "15px",
    //         background: 'gray',
    //         marginTop: '10px',
    //         borderRadius : '50%',
    //         height: '15px',
    //       }}

    //     >

    //     </button>
    //   ),

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />,
  };
  return (
    <Slider {...settings}>
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
    </Slider>
  );
}
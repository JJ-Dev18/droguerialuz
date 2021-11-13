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
      <FontAwesomeIcon
        icon={faChevronRight}
        size="2x"
        color={props.color}
      ></FontAwesomeIcon>
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
      <FontAwesomeIcon icon={faChevronLeft} size="2x" color={props.color}></FontAwesomeIcon>
    </div>
  );
}


export default function Carousel(props) {
  var settings = {
    dots: props.dots,
    infinite: true,
    speed: 500,
    slidesToShow: props.pcBig,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: props.pc,
          slidesToScroll: 1,
          infinite: true,
        
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: props.tablet,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.tel,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SampleNextArrow color={props.color} />,
    prevArrow: <SamplePrevArrow color={props.color} />,
  };
  return (
    <Slider {...settings}>
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
      {props.banner && props.onBanner()}
      {props.dctos && props.onDctos()}
      {props.dctos && props.onDctos()}
      {props.dctos && props.onDctos()}
      {props.dctos && props.onDctos()}
      {props.dctos && props.onDctos()}
      {props.dctos && props.onDctos()}
      {props.offer && props.onOffer()}
      {props.offer && props.onOffer()}
      {props.offer && props.onOffer()}
      {props.offer && props.onOffer()}
      {props.offer && props.onOffer()}
      {props.offer && props.onOffer()}
      {props.safe && props.onSafe()}
      {props.safe && props.onSafe()}
      {props.safe && props.onSafe()}
      {props.home && props.onHome()}
      {props.home && props.onHome()}
      {props.baby && props.onBaby()}
      {props.baby && props.onBaby()}
    </Slider>
  );
}
import React, { Component } from "react";
import Slider from "react-slick";
import { ContentProducto, NavegacionImg } from "./carouselProctoStyles";
import Image from "next/image";

 const CarouselProducto = ({ images }) => {
  
  const settings = {
    customPaging: function (i) {
      return (
        <NavegacionImg>
          <Image
            key={i}
            src={images[i].img}
            layout="intrinsic"
            width="100%"
            height="100%"
            objectFit="contain"
            alt="previsualizacion de imagenes"
          />
        </NavegacionImg>
      );
    },
    dots: true,
    dotsClass: "product-dots slick-product",
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    fade: true,
    swipeToSlide: false,
    swipe: false,
    useTransform: false,
    centerMode: true,
    className: "asdafsd",
  };
  return (
    <Slider
      {...settings}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {images.map((img) => (
        <ContentProducto key={img.img}>
          <img src={img.img} alt="imagen producto" />
        </ContentProducto>
      ))}
    </Slider>
  );
};

export default CarouselProducto;

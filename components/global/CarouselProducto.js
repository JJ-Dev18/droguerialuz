import React, { Component } from "react";
import Slider from "react-slick";
import { ContentProducto, NavegacionImg } from "./carouselProctoStyles";


export  const CarouselProducto = ()=>  {
  
    const settings = {
      customPaging: function (i) {
        return (
          <NavegacionImg>
            <img
              src={`/producto/${i + 1}.jpg`}
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
      swipeToSlide : false,
      swipe: false,
      useTransform: false,
      centerMode : true,
      className: "asdafsd"
    };
    ;
    return (
    
        <Slider {...settings} style={{height:'100%',display:'flex',flexDirection: 'column',justifyContent:'space-around'}}>
          <ContentProducto>
            <img
              src="/producto/2.jpg"
         
            />
          </ContentProducto>
          <ContentProducto>
            <img
              src="/producto/1.jpg"
           
            />
          </ContentProducto>
          <ContentProducto>
            <img
              src="/producto/3.jpg"       
            />
          </ContentProducto>
        </Slider>
     
    );
  }


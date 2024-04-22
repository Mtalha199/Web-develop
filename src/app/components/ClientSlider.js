"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import client1 from "../../../public/Assets/client1.svg"
import client2 from "../../../public/Assets/client2.svg";
import client3 from "../../../public/Assets/client3.svg";
import client4 from "../../../public/Assets/chayekhana.svg";
import client5 from "../../../public/Assets/client5.svg";
import client6 from "../../../public/Assets/gloriaJeans.svg";
import hondaImage from "../../../public/Assets/Honda.png"
import Miniso from "../../../public/Assets/Miniso.svg"
import Howdy from "../../../public/Assets/Howdy.png"
import ChenOne from "../../../public/Assets/ChenOne.svg"
import dWatson from "../../../public/Assets/dWatson.svg"
import suzuki from "../../../public/Assets/suzuki.png"



export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      // rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            style: {
              // paddingLeft: "90px",
            },
           
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            style: {
              // paddingLeft: "150px",
            },
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            style: {
              // paddingLeft: "130px",
            },
          },
        },
      ],
    };
    return (
      <div className="container-fluid slideMain">

            <p className="section_para ms-3">Trusted By</p>

        <Slider {...settings} className="sliderMain">
          <div className="d-flex justify-content-center">
            <Image src={client1} className="SliderImgCustom" />
          </div>
          <div className="d-flex justify-content-center">
            <Image src={client2} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={client3} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={client4} className="SliderImgCustom" />
          </div>{" "}
          
          <div  className="d-flex justify-content-center">
            <Image src={client5} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={client6} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={hondaImage} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={Miniso} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={Howdy} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={ChenOne} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={dWatson} className="SliderImgCustom" />
          </div>{" "}
          <div  className="d-flex justify-content-center">
            <Image src={suzuki} className="SliderImgCustom" />
          </div>{" "}
        </Slider>
      </div>
    );
  }
}

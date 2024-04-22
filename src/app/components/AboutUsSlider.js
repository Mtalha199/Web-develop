"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import work1 from "../../../public/Assets/work1.png";
import work22 from "../../../public/Assets/work2.png";



export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="container-fluid serviceSliderFix">


        <Slider {...settings} className="">
          <div className="aboutBordring">
            <Image src={work1} className="HomeSectionImage forBorder" />
          </div>
          <div className="">
            <Image src={work22} className="HomeSectionImage forBorder" />
          </div>
          {/* <div className="">
            <Image src={whyUs2} className="HomeSectionImage" />
          </div>{" "} */}
        </Slider>
      </div>
    );
  }
}


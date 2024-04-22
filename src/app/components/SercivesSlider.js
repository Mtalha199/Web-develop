"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import client1 from "../../../public/Assets/client1.svg"
import client2 from "../../../public/Assets/client2.svg";
import whyUs1 from "../../../public/Assets/whyUs1.png"
import whyUs2 from "../../../public/Assets/whyUs2.png"
import whyUs3 from "../../../public/Assets/whyUs3.png"
import whyUs4 from "../../../public/Assets/whyUs4.png"
import whyUs5 from "../../../public/Assets/whyUs5.png"
import whyUs6 from "../../../public/Assets/whyUs6.png"
import whyUs7 from "../../../public/Assets/whyUs7.png"




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
          {/* <div className="">
            <Image  src={whyUs1} className="HomeSectionImage" loading="lazy"/>
          </div>
          <div className="">
            <Image src={whyUs3} className="HomeSectionImage" loading="lazy"/>
          </div>
          <div className="">
            <Image src={whyUs2} className="HomeSectionImage" loading="lazy"/>
          </div>{" "} */}
          <div className="">
            <Image src={whyUs4} className="HomeSectionImage" loading="lazy"/>
          </div><div className="">
            <Image src={whyUs5} className="HomeSectionImage" loading="lazy"/>
          </div><div className="">
            <Image src={whyUs6} className="HomeSectionImage" loading="lazy"/>
          </div><div className="">
            <Image src={whyUs7} className="HomeSectionImage" loading="lazy"/>
          </div>
        </Slider>
      </div>
    );
  }
}

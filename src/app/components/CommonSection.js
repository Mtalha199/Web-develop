"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import whyUs1 from "../../../public/Assets/whyUs1.png"
import whyUs2 from "../../../public/Assets/whyUs2.png"
import whyUs3 from "../../../public/Assets/whyUs3.png"
import work1 from "../../../public/Assets/work1.png";
import work22 from "../../../public/Assets/work2.png";
import SercivesSlider from "../components/SercivesSlider"
import AboutUsSlider from "../components/AboutUsSlider"

function CommonSection({
  heading,
  content,
  paraOne,
  paraTwo,
  slide,
  videoStar1,
  Rectangle,
  rectangle1,
  rectangle2,
  dots,
  order_2,
  order_1,
  twoImages,
}) {
  const images = [ whyUs1,whyUs2, whyUs3];
  const images1=[work1,work22];
  const [imgIndex, setImgIndex] = useState(0);
  const [imgIndex1, setImgIndex1] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImgIndex1((prevIndex1) => (prevIndex1 + 1) % images1.length);

    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let currentImage = images[imgIndex];
  let currentImage1 = images1[imgIndex1];


  // const [img, setImg] = useState(sbt1);
  const [bounceAnimation, setBounceAnimation] = useState(false);
  const handleAnimationEnd = () => {
    setBounceAnimation(false);
  };
  return (
    <div className="rectangleSection">
      {slide ? <Image src={slide} className="Reactangleslide" /> : <></>}

      <div className="container ">
        <div className="row">
          <div className={`col-lg-6 col-md-6 col-sm-12 ${order_1}`}>
            {" "}
            <div className={heading?"section_heading mt-4":""}>
              <p className="section2_heading ms-2">{heading}</p>
              <p className="servicePara">{content}</p>

              <div className=" mt-5">
                <div className="para">
                  <div>{paraOne}</div>
                  <br />
                  <div>{paraTwo}</div>
                </div>
                <div className="servicePara"></div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${order_2} ServiceRectangle`}
          >
            {twoImages?(<>
            <AboutUsSlider />
              {/* <Image
            src={currentImage1}
            className={`HomeSectionImage ${
              bounceAnimation ? "animate__animated animate__fadeInUp " : ""
            }`}
            onAnimationEnd={handleAnimationEnd}
          /> */}
          

            </>):
          //    <Image
          //   src={currentImage}
          //   className={`HomeSectionImage ${
          //     bounceAnimation ? "animate__animated animate__fadeInUp " : ""
          //   }`}
          //   onAnimationEnd={handleAnimationEnd}
          // />
          <SercivesSlider />
        }
         
                {/* <Image src={videoStar1} className="ReactanglevideoStar1" /> */}

              {/* <servicesSlider /> */}
            {/* {twoImages ? (
              <div className="row mt-4 " style={{ position: "relative" }}>
                <div className="col-6 mt-1">
                  <Image src={videoStar1} className="commonSectionvideoStar1" />

                  <Image src={Rectangle} className="commonSectionRectangleOne" />
                </div>
                <Image src={dots} className="commonSectiondots" />

                <div className="col-6">
                  <Image src={work2} className="commonSectionRectangle" />
                </div>
              </div>
            ) : (
              <>
                <Image src={videoStar1} className="ReactanglevideoStar1" />
                <Image src={Rectangle} className="Reactangle" />
                <Image src={rectangle1} className="Rectangleone" />
                <Image src={rectangle2} className="Reactanglesecond" />
                <Image src={dots} className="Reactangledots" />
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonSection;

"use client";
import JobCard from './JobCard';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const JobSlider = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  return (

    <>

<div className='container mainJobSlider'>
        <Slider {...settings} className='jobFirstSubSlider'>
          <div className='subJobSlider'>
          <JobCard
          jobTitle={'Job Title1'}
          jobParagraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           />
          </div>
          <div className='subJobSlider'>
          <JobCard
          jobTitle={'Job Title2'}
          jobParagraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           />
          </div>
          <div className='subJobSlider'>
          <JobCard
          jobTitle={'Job Title3'}
          jobParagraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           />
           </div>
           <div className='subJobSlider'>
          <JobCard
          jobTitle={'Job Title4'}
          jobParagraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           />
           </div>
        </Slider>
      </div>
    </>
  );
};

export default JobSlider;
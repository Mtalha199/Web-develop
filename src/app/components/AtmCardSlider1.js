"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import atmCard1 from "../../../public/Assets/atmCard1.png"
import atmCard2 from "../../../public/Assets/atmCard2.png"
import atmCard3 from "../../../public/Assets/atmCard3.png"
import atmCard4 from "../../../public/Assets/atmCard4.png"
import atmCard5 from "../../../public/Assets/atmCard5.png"


const   AtmCardSlider1 = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              style: {
                paddingLeft: "90px",
              },
             
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              style: {
                paddingLeft: "1rem",
              },
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              style: {
                paddingLeft: "2rem",
              },
            },
          },
        ],
      };
    return ( 
        <>

<div className="container-fluid slideMain">
<Slider {...settings} className="sliderMain1">
<div>
<Image src={atmCard1} className="atmCardImg" />
</div>
<div>
<Image src={atmCard2} className="atmCardImg" />
</div>{" "}
<div>
    <Image src={atmCard3} className="atmCardImg" />
</div>{" "}
<div>
    <Image src={atmCard4} className="atmCardImg" />
</div>{" "}
<div>
<Image src={atmCard5} className="atmCardImg" />
</div>{" "}
{/* <div>
<Image src={atmPic} className="SliderImgCustom1" />
</div>{" "} */}
</Slider>
</div>
        </>
     );
}
 
export default AtmCardSlider1;
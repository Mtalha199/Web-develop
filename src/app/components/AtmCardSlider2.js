"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import client1 from "../../../public/Assets/client1.png";
import atmCard6 from "../../../public/Assets/atmCard6.png"
import atmCard7 from "../../../public/Assets/atmCard7.png"
import atmCard8 from "../../../public/Assets/atmCard8.png"
import atmCard9 from "../../../public/Assets/atmCard9.png"
import atmCard10 from "../../../public/Assets/atmCard10.png"

import atmPic from "../../../public/Assets/atmPic.png"
const AtmCardSlider2 = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true,
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
<Image src={atmCard6} className="atmCardImg" />
</div>
<div>
<Image src={atmCard7} className="atmCardImg" />
</div>{" "}
<div>
    <Image src={atmCard8} className="atmCardImg" />
</div>{" "}
<div>
    <Image src={atmCard9} className="atmCardImg" />
</div>{" "}
<div>
<Image src={atmCard10} className="atmCardImg" />
</div>{" "}

</Slider>
</div>

        </>
     );
}
 
export default AtmCardSlider2;
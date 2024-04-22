'use client'
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import pngwing from "../../public/Assets/pg.svg";
import Vector7 from "../../public/Assets/Vector7.svg";
import heroSection_icon3 from "../../public/Assets/heroSection_icon3.svg";
import heroSection_icon2 from "../../public/Assets/heroSection_icon2.svg";
import heroSection_icon1 from "../../public/Assets/heroSection_icon1.svg";
import card1 from "../../public/Assets/card1.png";
import card2 from "../../public/Assets/card2.png";
import card3 from "../../public/Assets/card3.png";
import card_image1 from "../../public/Assets/card_image1.svg";
import card_image2 from "../../public/Assets/card_image2.svg";
import card_image3 from "../../public/Assets/card_image3.svg";
import card_image4 from "../../public/Assets/card_image4.svg";
import videoStar1 from "../../public/Assets/videoStar1.svg";
import videoStar2 from "../../public/Assets/star22.svg";
import contactUsimage from "../../public/Assets/contactUsimage.png";
import dots from "../../public/Assets/dots.png";
import counterIcon from "../../public/Assets/counterIcon.png";
import map from "../../public/Assets/map1.png";
import atm2 from "../../public/Assets/atm2.png";
import atm1 from "../../public/Assets/atm1.png";
import atm3 from "../../public/Assets/atm3.png";
import atm6 from "../../public/Assets/atm6.png";
import atm5 from "../../public/Assets/atm5.png";
import atm4 from "../../public/Assets/atm4.png";
import slide from "../../public/Assets/slide.png";
import ContactFormCornerimage from "../../public/Assets/ContactFormCornerimage.png";
import ClientSlider from "./components/ClientSlider";
import CardWidth from "./components/CardWidth";
import Counter from "./components/Counter";
import MapCards from "./components/MapCards";
import ContactUs from "./components/ContactUs";
import AtmCardSlider1 from "./components/AtmCardSlider1";
import AtmCardSlider2 from "./components/AtmCardSlider2";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"
export default function Home() {
  return (
    <>
 
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="heroSectionHeading">
             
              <p >  With PaySa, make your payments </p>

               <Typewriter 
              
               options={{
                loop: true,
              }}
               onInit={(typewriter) => {
                typewriter
                    .typeString('effortless')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("swift")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("seamless")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("smooth")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("quick")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("easy")
                    .pauseFor(1000)
                    .start()
                    
            } }  />
          
               
             </div>
              <p className="heroSectionPara">
              Our innovative POS terminals redefine the experience, making it flawless for merchants like you. Embrace the perfection of PaySa, and streamline your financial journey like never before.
              </p>
              <Link className="link1" href={"/contactus"}>
              <div className="d-flex updateReadMore">
                <button className="heroSectionButton">
                  Take Charge of Your Money
                </button>
                <button className="buttonIcon">
                  <Image className="" src={Vector7} />
                </button>
              </div>
              </Link>
            </div>
            <div className="col-lg-6 PositionOfcounter">
              <Image className="card1" src={card1} />
              <Image className="card2" src={card2} />
              <Image className="card3" src={card3} />

              <Image className="heroSection_icon1" src={heroSection_icon1} />

              <Image className="heroSectionImage" src={pngwing} />
              <Image className="heroSection_icon2" src={heroSection_icon2} />
              <Image className="heroSection_icon3" src={heroSection_icon3} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="curveImage">
          <Image src={slide} className="curveImageinside" />{" "}
        </div>
        <div className="container">
       
        </div>
        <div className="slideMargin" style={{ background: "#163244" }}>
          <ClientSlider />
        </div>
        <div className="container pageMargin">
          <div className="row">
            <div className="col-lg-6 cardsDiv">
              <div className="section_heading mt-4">
                <p className="section2_heading ms-2">
                  Unleash Your Financial Potential with Exceptional Banking
                  Services
                </p>
              </div>
              <p className="heroSectionPara ms-3 mt-3">
              With all the exceptional services needed to make your transactions safe and smooth
              </p>
              <Link className="link1" href={"/contactus"}>
              <div className="d-flex ms-3">
              
                <button className="heroSectionButton">
                
                  Take Charge of Your Money
              

                </button>
                <button className="buttonIcon">
                  <Image className="" src={Vector7} />
                </button>
                
              </div>
              </Link>
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex cardMargin">
                <CardWidth
                  className=""
                  imageSrc={card_image1}
                  title="365 Days Settlement"
                  description="Get lightning-fast payment settlements with PaySa's POS terminal (within 24 hours)."
                  textColor="white"
                  backgroundColor="#8F55BD"
                  backCardTextColor='#8F55BD'
                />
                <CardWidth
                  imageSrc={card_image2}
                  title="Data-Driven Insights"
                  description="Make smart decisions with powerful analytics."
                  textColor="white"
                  backgroundColor="#69abd7"
                  backCardTextColor="#69abd7"
                />
              </div>
              <div className="d-flex mt-3 cardMargin2">
                <CardWidth
                  imageSrc={card_image3}
                  title="Secure VPN Tunnel"
                  description="Safeguard transactions with top-notch security through implementation of network segmentation."
                  textColor="white"
                  backgroundColor="#54B862"
                  backCardTextColor="#54B862"
                />
                <CardWidth
                  imageSrc={card_image4}
                  title="24/7 Customer Support"
                  description="Your queries are resolved in a heartbeat."
                  textColor="white"
                  backgroundColor="#CE2121"
                  backCardTextColor="#CE2121"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className='videoSection' >
        <div className="container">
          <div className="section_heading">
            <p className="section2_heading ms-2">Video Intro</p>
          </div>
          <Image src={dots} className="dots" />
          {/* <Image
            src={videoStar2}
            width={90}
            height={90}
            className="videoStar2"
          /> */}
          {/* <Image src={videoStar1} className="videoStar2 ms-5" /> */}

          <div className="galleryVideoParent">
            <video
               src='../../Assets/video1.mp4'  
              className="galleryVideo"
              // autoPlay
              controls
            />

            {/* <div className="d-flex mb-2 mt-5 justify-content-end">
              <button className="heroSectionButton mb-5">
                Take Charge of Your Money
              </button>
              <button className="buttonIcon">
                <Image className="" src={Vector7} />
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <br />
      <div className="breakTag">
        <br /> <br />
        <br /> <br />
      </div>





      
      <section>
        <div className="curveImage2">
          <Image src={slide} className="curveImageinside" />{" "}
        </div>
        <div className="container">
          <div className="row PositionOfcounter">
            <div className="col-lg-6">
              <div className="section_heading mt-4">
                <p className="section2_heading ms-2">
                  Empowering Pakistan, One Customer at a Time
                </p>
              </div>
              <div className="mt-5 ms-2">
                <Counter targetedValue={200} First={true} />
                <p className="counterText">Customers</p>
              </div>
              <p className="heroSectionPara ms-3 mt-3">
                A Fintech Company Providing Multiple Services for All Your
                Financial Needs
              </p>
              <Link className="link1" href={"/contactus"}>

              <div className="d-flex ms-3">
                <button className="heroSectionButton">Get in the Circle</button>
                <button className="buttonIcon">
                  <Image className="" src={Vector7} />
                </button>
              </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <div>
                <Image src={videoStar1} className="videoStar1Position" />
              </div>
              <div>
                <Image src={videoStar2} className="videoStar2Position" />
              </div>
              <div>
                <Image src={videoStar2} className="videoStar3Position" />
              </div>
              <div>
                <Image src={videoStar2} className="videoStar4Position" />
              </div>

              <div>
                <Image src={map} className="mapImage" />
              </div>
              {/* <div className="cardPosition">
                <MapCards
                  title={"Peshawar"}
                  description={120}
                  imgSrc={counterIcon}
                />
              </div>
              <div className="secondcardPosition">
                <MapCards
                  title={"Quetta"}
                  description={120}
                  imgSrc={counterIcon}
                />
              </div>
              <div className="ThirdcardPosition">
                <MapCards
                  title={"Lahore"}
                  description={120}
                  imgSrc={counterIcon}
                />
              </div>
              <div className="fourthcardPosition">
                <MapCards
                  title={"Islamabad"}
                  description={120}
                  imgSrc={counterIcon}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>





      {/* <section>
        <ContactUs />
      </section> */}
      <section className='cardSection'>
      <div >
      <AtmCardSlider1 />
      </div>
      <Link className="link1" href={"/contactus"}>

              <div className="d-flex justify-content-center  atmMid">
                <button className="heroSectionButton">Get in the Circle</button>
                <button className="buttonIcon">
                  <Image className="" src={Vector7} />
                </button>
              </div>
              </Link>

{/* <div> */}
            <AtmCardSlider2  />

            {/* </div> */}
        {/* <div className="atmSection">
          <div className="atmSectionHeading">Har Cheez ka Hal srf PaySa</div>
          <div className="row">
            <div className="col-3">
              <Image src={atm2} className="atm2" />

              <Image src={atm1} className="atm1" />

              <Image src={atm3} className="atm3" />
            </div>
            <div className="col-5 ps-5 paddingTop ms-5">
              <div className="heroSectionHeading heroSectionHeadingatmSection">
                Har Cheez ka <br></br> Hal srf PaySa
              </div>
              <div className="d-flex marginLeft mt-5">
                <button className="heroSectionButton ms-4">
                  Get in the Circle
                </button>
                <button className="buttonIcon">
                  <Image className="" src={Vector7} />
                </button>
              </div>
            </div>
            <div className="col-3">
              <Image src={atm6} className="atm6" />

              <Image src={atm5} className="atm5" />

              <Image src={atm4} className="atm4" />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

import Image from "next/image";
import dots from "../../../public/Assets/dots.png";
import slide from "../../../public/Assets/slide.png";
import videoStar1 from "../../../public/Assets/videoStar1.png";

import aboutMain from "../../../public/Assets/aboutMain111.svg";
import aboutMain1 from "../../../public/Assets/aboutMain1111.svg"
import work1 from "../../../public/Assets/work1.png";
import work2 from "../../../public/Assets/work2.png";


import videoStar2 from "../../../public/Assets/Star2.svg";
import CommonSection from "../components/CommonSection";
// import team1 from "../../../public/Assets/team1.png"
// import team2 from "../../../public/Assets/team2.png"
// import team11 from "../../../public/Assets/team11.png"
import Before1 from "../../../public/Assets/ceoBefore.png"
import BeforeImage1 from "../../../public/Assets/ceoAfter.png"
import After from "../../../public/Assets/ceo1Before.png"
import AfterImage from "../../../public/Assets/ceo1After.png"
import Link from "next/link";



function Page() {
  return (
    <div>
        <title> About Us - Paysa</title>
      <section className="aboutSection1">
        <div className="container serviceBanner">
          <h1 className="serviceHeading mt-5">About us</h1>
          {/* <h2 className="serviceSubHeading">Sub-Heading</h2> */}
          <div className="row">
            <div className="col-lg-6">
              <p className="aboutHeading">Our Story</p>
              <div className="servicePara">
              At PaySa, we embarked on our journey in 2023 with a clear mission – to provide seamless banking services and lead the digitalization efforts in our country. It all started in 2022 when myself, along with the other founders of PaySa identified a significant gap in the digital payments market.

              </div>{" "}
              <br />
              <div className="servicePara">
              Realizing there is limited access to essential financial services such as bank accounts and e-wallets, in our country despite ongoing efforts to enhance financial inclusivity over the past decade. Fortunately, the State Bank of Pakistan recently renewed its commitment to digitalization, which paved a favorable environment for our mission.

              </div>
              <br />
              <div className="servicePara">
              Hence creating more room for PaySa to play its part in filling the gap in the digital payments market. Encouraged by the supportive State Bank policies and initiatives, the company has taken it upon itself to be a part of our country’s digital transformation. Within just a year, PaySa has turned from an idea into a fully operational company. Following the same stellar pace, the organization achieved all its yearly targets within the first two months of operation!

              </div>
              <br />
              <div className="servicePara">
              With the confidence to exceed expectations of all stakeholders by conscientiously considering their respective interests, we remain steadfast in delivering innovative solutions and making a lasting impact on the work of digital finance. Our journey has only just begun, and we are determined to shape a brighter future for banking services in our country. PaySa proudly serves some of the big names within their respective industries with its service presence in sixteen cities across Pakistan.
              </div>
              <br />
        
              <br />
              <div className="servicePara">
              Ali Adnan<br></br>
              Chief Executive Officer<br></br>
              PaySa


              </div>
            </div>
            <div className="col-lg-6  aboutSection">
              <Image src={videoStar2} className="aboutvideoStar2" />

              <div>
                <div className="">
                <Image src={aboutMain} className="aboutImg" />
                {/* <Image src={aboutMain1} className="aboutImg1"/> */}
                </div>
                <Image src={dots} className="aboutdots" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="aboutSectionHowWeWork">
        <div className="mt-4"> 
          <CommonSection
            heading={"How we work"}
            paraOne={
              "At PaySa, our company values form the very backbone of how we operate in the dynamic world of fintech and merchant acquisition. Integrity is at the core of everything we do, ensuring honesty, trust, and ethical practices in all aspects of our services. Teamwork, Diversity & Inclusion foster a collaborative environment where diverse perspectives enrich our solutions and drive innovation. We uphold a firm Promise to Customers, prioritizing their satisfaction and delivering beyond expectations. Quality is ingrained in every process, and Honesty guides our interactions, ensuring open communication and genuine relationships with our valued partners. With these values as our guiding principles, PaySa works passionately and tirelessly to provide customized payment solutions and seamless POS terminal deployment, empowering businesses to thrive and succeed in today's ever-evolving market"
            }
         
            slide={slide}
            videoStar1={videoStar1}
            Rectangle={work2}
            work2={work1}
            dots={dots}
            order_2={"order-2"}
            order_1={"order-1"}
            twoImages={true}
          />
        </div>
      </section>
      {/* <section>
        <div>
          <CommonSection
            // heading={"How we work"}
            paraOne={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            paraTwo={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            slide={slide}
            videoStar1={videoStar1}
            Rectangle={Rectangle}
            dots={dots}
            order_2={"order-1"}
            order_1={"order-2"}
            twoImages={true}
          />
        </div>
      </section> */}

      <div className="container mt-5">
        <div className="section_heading mt-5">
          <p className="section2_heading ms-2">Leadership</p>
        </div>
        <div className="d-flex  justify-content-center gap-5 flex-wrap mt-4">
          {/* <div className=" ">
            {" "}
            <div className="">
              <Image src={Rectangle} className="aboutUsCards" />
              <div className="text-center">
                <h5 className="">Name</h5>
                <p className="aboutUsCardsText">Designation</p>
              </div>
            </div>
          </div> */}
          <div className=" ">
            {" "}
            <div className="">
            <div class="image-container">
              <Image src={After} className="aboutUsCards ADDED" />
              <Image src={AfterImage} className="aboutUsCards1" />
              </div>
              <div className="text-center">
                {/* <h5 className="mt-3">Name</h5> 
            */}
            <Link className="ceo1" href={"https://www.linkedin.com/in/ali-adnan-cfa-120100100"}>Ali Adnan </Link>
                <p className="aboutUsCardsText">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          <div className=" ">
            {" "}
            <div className="">
            <div class="image-container">
              <Image src={Before1} className="aboutUsCards ADDED" />
              <Image src={BeforeImage1} className="aboutUsCards1" />
              </div>
          
              <div className="text-center">
              <Link className="ceo1" href={"https://www.linkedin.com/in/sedrick-j-nicholson-72881988"}>Sedrick J Nicholson
 </Link>
                <p className="aboutUsCardsText">Chief Operating Officer</p>
              </div>
            </div>
          </div>
          {/* <div className=" ">
            {" "}
            <div className="">
              <Image src={Rectangle} className="aboutUsCards" />
              <div className="text-center">
                <h5 className="">Name</h5>
                <p className="aboutUsCardsText">Designation</p>
              </div>
            </div>
          </div> */}
          {/* <div className=" ">
            {" "}
            <div className="">
              <Image src={Rectangle} className="aboutUsCards" />
              <div className="text-center">
                <h5 className="">Name</h5>
                <p className="aboutUsCardsText">Designation</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Page;

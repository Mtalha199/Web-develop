'use client'
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import teamwork from "../../../public/Assets/team.png"
import star8 from "../../../public/Assets/star8.png"
import star9 from "../../../public/Assets/star9.png"
import slide1 from "../../../public/Assets/slide1.png"
import BenefitCard from "../components/BenefitCard";
import group from "../../../public/Assets/Group.png"
import pic2 from "../../../public/Assets/pic2.png"
import dotpic from "../../../public/Assets/dotpic1.png"
import dotpic2 from "../../../public/Assets/dotpic2.png"
import JobCard from "../components/JobCard";
import JobSlider from "../components/JobSlider"
import benefitCard from "../../../public/Assets/benefitCard11.svg"
import hiringCard from "../../../public/Assets/hiringCard11.svg"

function Page() {
  return (
    <div >
        <title> Career | Paysa</title>

      <section className="rectangleSection1">
        <div className="imageDiv">
      <Image src={slide1} className="Reactangleslide1" alt="error" ></Image>
      </div>
         <div className="container setThis">

        <Image className="star8" src={star8}></Image>
          <h1 className="serviceHeading mt-10">Careers</h1>
          <div className="section_heading">
          <h2 className="section2_heading ms-2">Company Values</h2>
          </div>
          {/* <Image src={star9} className="star9"></Image> */}
        <div className="imageSetting">
        <Image  src={teamwork}
        className="imageSetting1"
        ></Image>
        </div>
        </div>
 
      </section>

      <section className="rectangleSection2">


      <div className="container">
      <div className="section_heading">
          <h2 className="section2_heading ms-2">Human Resource Benefits</h2>
          </div>
          <div className="row mainBenefitCard mt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-sm-4 ">
            <Image src={benefitCard} className="humanResourcecard1"></Image>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12  ">

            <Image src={hiringCard} className="humanResourcecard1"></Image>
            </div>
            
        {/* <BenefitCard 
        heading={"Benefits"}
        paragraph={"PaySa offers market-competitive salaries, insurance, two types of commissions, and flexible time-off policies to ensure an equilibrium between your professional and personal commitments "}
        pic1={group}
        <div className="childBenefit anotherOne"> 
            <Image src={pic1} className="pic1"></Image>
        </div>
        
        <BenefitCard 
        heading={"Hiring Process"}
        paragraph={"With our 3 steps hiring process (application process, interview and offers), we ensure the future PaySa Squad member gets an update within a short turnaround time."}
        pic1={pic2}
        
        /> */}
        {/* <Image src={dotpic} className="dotPic"></Image> */}
        </div>
      </div>


      </section>

      <section className="rectangleSection3" >

      <div className="container">
      <div className="section_heading">
          <h2 className="section2_heading ms-2">Working Environment</h2>
          </div>
            {/* <video
              src="../../Assets/golbin.mp4"
              className="galleryVideo"
              autoPlay
              controls
            /> */}

        <p className="para">
         <p>Our commitment brings us together. At PaySa, our culture is to put our people first and honor accomplishments and contributions. Our values help us approach work with Integrity, Teamwork, Diversity & Inclusion, Promise to Customers, Quality and Honesty hence making PaySa great by each passing day.<br></br>
         </p>
        <p>Teamwork is at the heart of PaySa that not only enables us to ensure diversity but helps us and our people in achieving their goals. When you become a part of the PaySa squad you step into the culture where everyone matters and every employee is valued. PaySa believes in creating an environment that promotes and takes part in ensuring the diversity of ideas, backgrounds and perspectives hence giving our people the necessary space for their professional growth in a comfortable environment. We uphold Quality and Honesty, encouraging open communication and fostering genuine relationships within our close-knit team.<br></br>
        </p><p>With a simple talent philosophy, we hire ambitious and early-stage professionals to give them the opportunity to help PaySa achieve its milestones at the same time building their own track record of achievements, make an impact and accelerate their career growth.
        </p>
        Great things happen when people with mutually aligned values and goals come together.
        </p>
      </div>
      </section>

      <section className="section4">
        <div className="container">
        <div className="section_heading">
          <h2 className="section2_heading ms-2">Jobs</h2>
          </div>
          <div>
          <Image src={dotpic2} className="jobImage mt-5"></Image>
          </div>
          <div>

          </div>
          <div className="onlyForChecking">
            {/* <div> */}
              {/* <p>No Jobs Available Now</p> */}
            {/* </div> */}
            <div className="slideMargin1"
            //  style={{ background: "#163244" }}
             >
              <h4>Currently, No Job Availble Right Now</h4>
          {/* <ClientSlider /> */}
        </div>
          {/* <JobSlider /> */}
          </div>
        </div>

      </section>
      <section>
        <ContactUs />
      </section>
    </div>
  );
}

export default Page;

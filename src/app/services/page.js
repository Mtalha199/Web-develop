'use client'
import Image from "next/image";
import React from "react";
import serviceBackPic from "../../../public/Assets/serviceBackPic.png"
import paysa from "../../../public/Assets/Paysa-180.png";
import dots from "../../../public/Assets/dots.png";
import videoStar2 from "../../../public/Assets/Star2.svg";
import ServiceCard from "../components/ServiceCard";
import videoStar1 from "../../../public/Assets/videoStar1.png";
import Rectangle from "../../../public/Assets/Rectangle.png";
import slide from "../../../public/Assets/slide.png";
import CommonSection from "../components/CommonSection";
import serviceCardPic1 from "../../../public/Assets/serviceCardPic1.png"
import serviceCardPic2 from "../../../public/Assets/serviceCardPic2.png"
import serviceCardPic3 from "../../../public/Assets/serviceCardPic3.svg"
import serviceCardPic4 from "../../../public/Assets/serviceCardPic4.svg"
import whyUs1 from "../../../public/Assets/whyUs1.svg"
import whyUs2 from "../../../public/Assets/whyUs3.svg"
import whyUs3 from "../../../public/Assets/whyUs2.svg"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelDraco from "../components/ModelDraco"
import ClientSlider from "../components/ClientSlider"
// import Head from "next/head";
// export const metadata = {
//   title: 'Blog',
//   openGraph: {
//     title: 'Blog',
//   },
// }

function Page() {
  const pageTitle="Services| Paysa "
  const minDistance=5;
  const maxDistance=5;
  
  return (
    
    <>
    <title>Services - Paysa</title>
      <section className="firstSection">
          <Image src={serviceBackPic} className="backImageService"></Image>
        <div className="container">

          <h1 className="serviceHeading mt-5">Service</h1>
          <div className="section_heading">
          <h2 className="section2_heading ms-2">PaySa Terminal</h2>
          </div>
          <div  className="d-flex justify-content-center w-100">
            <div style={{width: '100%',
            overflow: 'hidden',
              display: 'flex',
               justifyContent: 'center'}} className="threedModel">
            <Canvas className='canvas-1'>
            <OrbitControls
            enableZoom={true} 
            minDistance={minDistance} 
            maxDistance={maxDistance} 
             />
            <ambientLight  intensity={0.1}/>
            {/* <directionalLight position={[0, 0,-1]} intensity={10} /> */}
            <directionalLight position={[-1,1,1]}  intensity={5}/>
            <directionalLight intensity={5} position={[1, -1, 1]} />
            <ModelDraco />
            </Canvas>
            </div>

          </div>
          <Image src={dots} className="serviceDots" />
          <Image src={videoStar2} className="servicevideoStar2" />
        </div>
      </section>

      <section className="serviceSection2">
      {/* serviceCardCol */}
  <div className="container serviceCards">
  <div className="row serviceCardRow">
      <div className="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4 servicCardOnlySmall  ">
      <ServiceCard 
      serviceCardPic={serviceCardPic1}
      heading={'365 Days Settlement'}
      showPara={'PaySa offers its merchant partners quick and efficient payment settlements, ensuring that funds from credit card and debit card transactions are deposited into their designated accounts within 24 hours.'}
      hidePara={" This speedy settlement process improves cash flow for businesses, enabling them to meet their financial obligations and invest in growth opportunities without delay."}

      />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4 servicCardOnlySmall">
      <ServiceCard 
      serviceCardPic={serviceCardPic2}
      heading={'Data-Driven Insight'}
      showPara={'PaySa provides merchants with comprehensive business reports and analytics. These detailed reports offer valuable insights into their operations, sales trends, and  other crucial metrics. Armed with this'}
      hidePara={" data, merchants can make informed decisions on various aspects of their business. This data-driven approach empowers merchants to optimize their business operations. "}
     />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-sm-4 servicCardOnlySmall ">
      <ServiceCard
       serviceCardPic={serviceCardPic3}
       heading={'Secure VPN Tunnel'}
       showPara={'To ensure highest levels of security PaySa employs a state of the art VPN tunnel setting unprecedented standards for security during your payment process. This security measure protects customers payment data'}
       hidePara={"from potential cyber threats and fraudulent activities and enhancing trust and confidence in the payment process for both merchants and their customers."}
       />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 servicCardOnlySmall">
      <ServiceCard 
      serviceCardPic={serviceCardPic4}
      heading={'24/7 Customer Support'}
      showPara={"PaySa understands the importance of prompt and efficient customer support. PaySa is here to address any queries or concerns merchants may have.Whether it is technical assistance,  billing-related questions, "}
      hidePara={" or any other issues, PaySa is available at a moment's notice. This commitment to excellence fosters  with merchants and instills confidence in the reliability of PaySa's services."}/>

</div>
</div>
</div>
      </section>
      <section className="servicesCheck">
        <CommonSection
          heading={"Why Us ?"}
          content={
            "At PaySa, we stand out as the ultimate fintech partner for your business. Our commitment to delivering unparalleled services sets us apart. Experience the advantage of lightning-fast payment settlements, ensuring funds in your account within 24 hours. Gain a competitive edge with data-driven insights, empowering you to make informed decisions that drive growth. Rest assured, your transactions are also fortified with our cutting-edge VPN tunnel, offering unmatched security for you and your customers. Plus, our dedicated 24/7 customer support ensures we are always here to assist you."
          }
          paraOne={
            "Trust in us to elevate your payment solutions - get PaySa today!."
          }
          
          slide={slide}
          videoStar1={videoStar1}
          Rectangle={whyUs1}
          rectangle1={whyUs2}
          rectangle2={whyUs3}
          dots={dots}
          order_2={"order-2"}
          order_1={"order-1"}
        />
       
      </section>
      <br />
      <br />
    </>
  );
}

export default Page;
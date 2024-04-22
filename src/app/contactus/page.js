"use client";
import Image from "next/image";
import React, { useState } from "react";
import dots from "../../../public/Assets/dots.png";
import videoStar2 from "../../../public/Assets/videoStar2.png";
import plus from "../../../public/Assets/plus.png";
import minus from "../../../public/Assets/minus.png";

import Rectangle from "../../../public/Assets/Rectangle.png";
import ContactUs from "../components/ContactUs";
import ContactQues from "../components/ContactQues";

function Page() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  return (
    <>
        <title> Contact US - Paysa</title>
      <section>
        <div className="container serviceBanner">
          {/* <h1 className="serviceHeading mt-5">Contact Us</h1> */}
          {/* <h2 className="serviceSubHeading">Sub-Heading</h2> */}
          {/* <Image src={dots} className="newsDots" /> */}
          {/* <Image src={videoStar2} className="newsvideoStar2" /> */}
          <ContactUs />
          {/* <div className="row">
            <div className="col-12">
              <Image src={Rectangle} className="newsImg" />
            </div>
          </div> */}
        </div>
      </section>
      <section className="contactSection2">
        <div className="container">
          <div className="row">
            {/* <div className="col-12 servicePara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. , when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. <br /> Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industrys standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div> */}
          </div>
          <div className="section_heading mt-4">
            <p className="section2_heading ms-2">FAQ&apos;s</p>
          </div>
          <ContactQues
          question={'What is merchant acquisition, and how does it benefit my business?'} 
          answer={'Merchant acquisition refers to the process of onboarding businesses to accept electronic payments through POS terminals. It benefits your business by expanding payment options for customers, increasing sales, improving cash flow, and enhancing customer convenience'}/>
          
          <ContactQues
          question={'How long does it take to set up a POS terminal for my business?'} 
          answer={'The setup time for a POS terminal varies depending on the provider and your location. At PaySa it typically takes 3-5 business days to complete the installation and activation process.'}/>
          
          <ContactQues
          question={'Are there any hidden fees or additional charges associated with merchant acquisition and POS deployment?'} 
          answer={'At PaySa, we believe in transparency. There are no hidden fees, and we provide a clear breakdown of all charges (if any) involved during the onboarding process.'}/>
          <ContactQues
          question={"How secure are POS transactions, and what measures are in place to protect my customers' data?"}
          answer={"POS transactions are highly secure. PaySa employs cutting-edge encryption technology and a VPN tunnel to safeguard all transactional data that is masked and communicated through a secure private network to ensure highest levels of transmission safety. Ensuring your customers' information remains protected from cyber threats"} />
          <ContactQues
          question={'Can I access business reports and analytics with your POS system?'} 
          answer={' Absolutely! PaySa provides you access to business reports and analytics. You can monitor sales trends, inventory, and customer behavior, empowering you to make informed decisions for business growth.'}/>
          
          <ContactQues
          question={'What type of customer support can I expect if I encounter any issues with the POS terminal?'} 
          answer={'PaySa offers 24/7 customer support to address any technical or operational concerns you may have. Our dedicated team is just a call away, ready to provide prompt assistance and resolve any queries.'}/>
           <ContactQues
          question={'What types of POS terminals are available, and which one is best suited for my business?'} 
          answer={'POS terminals come in various types, including countertop, mobile, and tablet-based. The best one for your business depends on your specific needs and setup'}/>
           <ContactQues
          question={'Is there a minimum transaction volume required to use the POS terminal?'} 
          answer={'PaySa does not impose a minimum transaction volume requirement but our pricing gets more competitive as the transaction volume increases. You have the flexibility to use the POS terminal according to your business needs.'}/>
           <ContactQues
          question={'Can I accept multiple payment methods, such as credit cards, debit cards, and mobile wallets, with the POS terminal?'} 
          answer={'Absolutely! PaySas POS terminal is equipped to accept various payment methods, including credit cards, debit cards, mobile wallets, and more, offering your customers a wide range of payment options.'}/>
           <ContactQues
          question={'How do I get started with merchant acquisition and POS deployment with PaySa?'} 
          answer={"Getting started is easy! Simply contact our team through our website or call our customer support, you can reach out to us through our official email as well. We'll guide you through the onboarding process and help you choose the best POS solution for your business needs."}/>
        
        </div>
      </section>
      {/* <section>
        <ContactUs />
      </section> */}
    </>
  );
}

export default Page;

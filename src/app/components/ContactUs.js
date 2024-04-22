'use client'
import Image from "next/image";

import contactUsimage from "../../../public/Assets/contactUsimage.png";
import ContactFormCornerimage from "../../../public/Assets/ContactFormCornerimage.svg";
import dots from "../../../public/Assets/dots.png";

import Vector7 from "../../../public/Assets/Vector7.svg";
// import emailjs from "emailjs-com"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const form=useRef()
  console.log(form.current,"form" )
  const sendEmail=(e)=>{
    e.preventDefault();
    // console.log("IN sending email",form.current)
    emailjs.sendForm('service_1zpuxqi','template_6rl0d85',form.current,'gnFrwrau_B2K9mR_G').then((res)=>{
      // console.log(res)
      toast.success("Submitted Successfully")
    }).catch((err)=>{
      // console.log(err)
      toast.error(err.text)

    })
    e.target.reset();
  }
  return (
    <div className="container mt-4">
      <div className="section_heading">
        <p className="section2_heading ms-2">Contact Us</p>
      </div>

      <div className="d-flex row g-0 contact_form mt-4">
        <div className="col-lg-8 col-md-12">
          <form ref={form} action="" className="contactUs"
           onSubmit={sendEmail}
           >
            <div className="d-flex flex-column mt-2">
              <label htmlFor="" className="form-label ">
                Name <span className="required-label">*</span>
              </label>
              <input required type="text" className="form-control" placeholder="Name" name="name"
            />
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="" className="form-label">
                Email <span className="required-label">*</span>
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="" className="form-label">
                Contact No <span className="required-label">*</span>
              </label>

              <input
              type="text"
               pattern="[0-9]{11}"
               maxLength="11"
               minLength="11"
                className="form-control"
                placeholder="Contact No"
                name="contactNo"
                required
              />
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="" className="form-label">
                Message
              </label>

              <textarea
                type=""
                className="form-control textarea"
                placeholder="Enter Details"
                name="message"
              />
            </div>
            <div className="d-flex mt-4">
              <button className="heroSectionButton border" type="submit"
               >
                Get in the Circle
              </button>
              <button className="buttonIcon">
                <Image className="" src={Vector7} />
              </button>
            </div>
          </form>
          <Image src={dots} className="contactUsdots" />
        </div>
        <div className="col-lg-4 col-md-12 plusOk">
          <div className="contactUsBG">
            <Image src={contactUsimage} className="contactUsimage" />
            <Image
              src={ContactFormCornerimage}
              className="ContactFormCornerimage"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;

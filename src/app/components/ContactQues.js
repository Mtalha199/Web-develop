"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import minus from "../../../public/Assets/minus.svg";
import plus from "../../../public/Assets/plus.svg";

const ContactQues = (
    {
        question,
        answer,
    }
) => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(true);
    const buttonRef = useRef();
    useEffect(() => {
      const handleClickAnywhere = (event) => {
        if (!buttonRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
  
      document.addEventListener('click', handleClickAnywhere);
  
      return () => {
        document.removeEventListener('click', handleClickAnywhere);
      };
    }, []);
    
    return ( 
        <>
       <div className="accordianBorder mt-3">
            <div className="p-3 pb-0 d-flex justify-content-between align-content-center" >
              <p className="accordianTitle">
                {question
                }
              </p>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpen(!open);
                  event.stopPropagation();
                }}
                ref={buttonRef}
              >
                <Image src={open ? minus : plus} className="newsplus" />
              </div>
            </div>
            <div
              className={`accordianContent ${open ? "show" : ""}`}
              style={{ maxHeight: open ? "1000px" : "0" }}
            >
              {/* Content of the first accordion */}
              <p className="ps-3 pe-3">
              {answer}
              </p>
            </div>
          </div>
        </>
     );
}
 
export default ContactQues;
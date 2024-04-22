'use client'
import Image from "next/image";
import serviceCardPic from "../../../public/Assets/serviceCardPic1.png"
import serviceVector from "../../../public/Assets/serviceVector.png"
import blueColor from "../../../public/Assets/blueColor.svg"
import { useState } from "react";
const ServiceCard = ({
    serviceCardPic,
    heading,
    showPara,
    hidePara,
}) => {

    const [open, setOpen]=useState(false)
    const learnMore=()=>{
        console.log("changing learn more")
        setOpen(!open)
            // Define different heights based on screen size
    // let newHeight = '25.375rem'; // Default height

    // if (window.innerWidth <= 1440) {
    //   // Mobile screen
    //   newHeight = '80rem'; // Set height for mobile
    // }
    // // } else if (window.innerWidth <= 991) {
    //   // Tablet screen
    //   newHeight = '25rem'; // Set height for tablet
    // } else {
    //   // Desktop screen
    //   newHeight = '30rem'; // Set height for desktop
    // }

    // Update the height dynamically
    // setMainDivStyle({  height:newHeight});
    }

    // const mainDivStyle = {
    //     height: open ? '34.5rem' : '27.375rem', 
    //   };
    // const [mainDivStyle, setMainDivStyle] = useState({
    //     height: '36.375rem', // Default height
    //   });
    return ( 
    <>
    <div className={!open ? "mainServiceCard" : "mainServiceCard heigh100"} >
        <div className="servicePicSetting">
            <Image src={serviceCardPic} className=""></Image>
        </div>
        <h4 className="serviceCardHeading">{heading}</h4>
        <p className="serviceCardPara">
        {showPara}
        {open && hidePara}
        </p>
        <h6 className="learnMore" onClick={learnMore} >{!open ? 'Learn More' : 'Show Less' }
        <Image src={serviceVector} className="learnmoreImage"></Image>
        {/* <Image src={blueColor} className="learnmoreImage"></Image> */}


        </h6>

    </div>
    </> );
}
 
export default ServiceCard;
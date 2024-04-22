import Image from "next/image";
import Vector7 from "../../../public/Assets/Vector7.svg"

const BenefitCard = ({
  heading,
  paragraph,
  pic1,

}
) => {
    return (
        <>
        <div className="container">
               <div className="benefitCard">
            <h1 className="benefitHeading">
                {heading}
            </h1>
            <p className="benefitSubHeading">
             {paragraph}
            </p>
            <div className="childBenefit anotherOne"> 
            <Image src={pic1} className="pic1"></Image>
            {/* <div className="d-flex buttonMore">
             <button className="heroSectionButton addingMore ">
                  Read More
              </button>
              <button className="addingButton">
                  <Image className="addingButton1" src={Vector7} />
              </button> 
              </div> */}






            </div>
            </div>
 
        </div>
        </>
      );
}
 
export default BenefitCard;
import Image from "next/image";
import linkedinIcon from "../../../public/Assets/linkdienicon.png"

const JobCard = (
    {
        jobTitle,
        jobParagraph,
    }
) => {
    return ( 
        <>
<div className="container mainJobCard">
<Image src={linkedinIcon} className="linkinIconChanging"></Image>
<a className="jobButton">Apply Here</a>
<h1 className="jobTitle">{jobTitle}</h1>
<p className="jobParagraph"> {jobParagraph} </p>
</div>
</>
     );
}
 
export default JobCard;
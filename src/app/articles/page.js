import Image from "next/image";
import React from "react";
import dots from "../../../public/Assets/dots.png";
import videoStar2 from "../../../public/Assets/videoStar2.png";
import Vector7 from "../../../public/Assets/Vector7.svg";

import Rectangle from "../../../public/Assets/Rectangle.png";
import Link from "next/link";
import mainPaysa from "../../../public/Assets/mainPaysa.jpg"
import articleLogo from "../../../public/Assets/articleLogo.svg"
import Head from "next/head";
function page() {
  const blogData=[
    {
      id:"1",
      name:"Meezan Bank Collaboration - Paysa",
      para:"Meezan Bank enters into a Strategic Collaboration with PaySa... ",
      link:"https://www.meezanbank.com/meezan-bank-enters-into-a-strategic-collaboration-with-paysa/#:~:text=By%20combining%20their%20respective%20strengths,financial%20inclusion%20in%20the%20country.",
    },
    {
      id:"2",
      name:"Meezan Bank Collaboration - BRecorder",
      para:"Meezan Bank enters into stragetic COllaboration with PaySa...",
      link:"https://epaper.brecorder.com/2023/03/30/7-page/958703-news.html",
    },
    {
      id:"3",
      name:"Meezan Bank Collaboration - Daily Times",
      para:"Meezan Bank enters into strategic collaboration with PaySa...",
      link:"https://dailytimes.com.pk/1078730/meezan-bank-enters-into-strategic-collaboration-with-paysa-to-expand-pos-services/",

    },
    {
      id:"4",
      name:"Meezan Bank Collaboration - Link News",
      para:"Meezan Bank enters into a strategic collaboration with PaySa...",
      link:"https://mettisglobal.news/meezan-bank-enters-into-a-strategic-collaboration-with-paysa/",

    }
  ]
  
  return (
    <>
    
        <title> Articles - Paysa</title>
    
      <section>
        <div className="container serviceBanner">
          <h1 className="serviceHeading mt-5">Articles</h1>
          {/* <h2 className="serviceSubHeading">Sub-Heading</h2> */}
          <Image src={dots} className="newsDots" />
          {/* <Image src={videoStar2} className="newsvideoStar2" /> */}

          <div className="row">
            <div className="col-12">
              <Image src={mainPaysa} className="newsImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="articleSection2">
        <div className="container ">
         
          <div className="row">
          {
            blogData.map((item)=>(
              <div className="col-lg-3 col-md-6 col-sm-12  " key={item.id}>

              {/* <Link href={`/articles/${item.id}`}  className="text_decoration_none"> */}
                
              <div className="newsBackground ">
                <div>
                  <Image src={articleLogo} className="newsCards" />
                </div>
                <div className="m-3">
                  {/* <div className="d-flex">
                    {" "}
                    <div className="hash">
                      # <span className="tags">tags</span>
                    </div>{" "}
                    <div className="hash">
                      # <span className="tags">tags</span>
                    </div>{" "}
                    <div className="hash">
                      # <span className="tags">tags</span>
                    </div>{" "}
                    <div className="hash">
                      # <span className="tags">tags</span>
                    </div>
                  </div> */}
                  <p className="newsCardsHeading againHeading">{item.name}</p>
                  <p className="newsCardsPara">
                  {item.para}
                  </p>
                  <div className="mb-2 d-flex justify-content-between align-content-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="31"
                        viewBox="0 0 20 17"
                        fill="none"
                      >
                        <path
                          d="M10.351 14.4873L10.2567 14.5763L10.153 14.4873C5.67366 10.648 2.71258 8.10932 2.71258 5.53499C2.71258 3.75345 4.12711 2.41729 6.01315 2.41729C7.4654 2.41729 8.87993 3.30806 9.37973 4.51951H11.1337C11.6335 3.30806 13.0481 2.41729 14.5003 2.41729C16.3864 2.41729 17.8009 3.75345 17.8009 5.53499C17.8009 8.10932 14.8398 10.648 10.351 14.4873ZM14.5003 0.635742C12.8595 0.635742 11.2846 1.35727 10.2567 2.48855C9.22885 1.35727 7.654 0.635742 6.01315 0.635742C3.10865 0.635742 0.826538 2.7825 0.826538 5.53499C0.826538 8.8932 4.03281 11.6457 8.88936 15.8056L10.2567 16.9814L11.6241 15.8056C16.4807 11.6457 19.6869 8.8932 19.6869 5.53499C19.6869 2.7825 17.4048 0.635742 14.5003 0.635742Z"
                          fill="#FCFCFC"
                        />
                      </svg>
                    </div>
                    <Link target="_blank" className="text-decoration-none"
                    // href={"https://www.meezanbank.com/meezan-bank-enters-into-a-strategic-collaboration-with-paysa/#:~:text=By%20combining%20their%20respective%20strengths,financial%20inclusion%20in%20the%20country."}>
                    href={item.link} 
                    // className="text_decoration_none"
>
                    <div className="d-flex ms-3">

                      <button className="newsSectionButton">Read more</button>
                      <button className="newsbuttonIcon">
                        <Image className="" src={Vector7} />
                      </button>
                    </div>
                    </Link>

                  
                  </div>
                </div>
              </div>

            {/* </Link> */}
          </div>
            ))
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

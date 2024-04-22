import Image from "next/image";
import React from "react";
// import mylogogif from "../../public/Assets/mylogogif.gif";
import paysaLoading from "../../public/Assets/paysaLoading.gif"
export default function loading() {
  return (
    <div className="loaderParent">
        
    <Image src={paysaLoading} width={800} height={500} alt="Logo GIF" />
{/* <span className="loader"></span> */}
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Counter from "./Counter";

function MapCards({ title, description, imgSrc }) {
  return (
    <div className="card card_width ">
      <div className="p-2">
        <b>{title}</b>
        <div className="d-flex align-content-center ">
          <h5 className="d-flex">
            <Counter targetedValue={description} First={false}  />clients
          </h5>
          <Image src={imgSrc} className=" custom-margin" />
        </div>
      </div>
    </div>
  );
}

export default MapCards;

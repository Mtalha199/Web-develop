import Image from "next/image";
import React from "react";

const CardWidth = ({
  imageSrc,
  title,
  description,
  textColor,
  backgroundColor,
  backCardTextColor,
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };
  const borderStyle = {
    borderLeft: `2px solid ${textColor}`,
  };

  return (
    <div
      className="cardWidth"
      
    >
      <div className="flipCardInner">
      <div className="p-3 increaseSize" style={cardStyle} >
        <Image src={imageSrc} alt="Card" />
        <div className="" style={borderStyle}>
          <p className="ms-2 mt-2 purpleCard" style={{ color: textColor }}>
            {title}
          </p>
        </div>
        <div className="purpleCardText" style={{ color: textColor }}>
          {description}
        </div>
      </div>

      <div className="flipCardBack" style={{border:`5px solid ${backgroundColor}`}} >
      <Image src={imageSrc} alt="Card" className="backImageSet" />
      <div className="borderSet" style={ {borderLeft: `2px solid ${backCardTextColor}`}}>
      <p className="ms-2 mt-2 purpleCard" style={{ color: backCardTextColor }}>
            {title}
          </p>
          </div>
          <div className="purpleCardText1" style={{ color:backCardTextColor }}>
          {description}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardWidth;

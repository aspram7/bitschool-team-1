import React from "react";

import "./SliderBox.scss";

const SliderBox = ({ img, title, description }) => {
  return (
    <div className="slider-box">
      <div className="slider-box-content">
        <div className="slider-box-img">
          <img src={img.url} alt={img.alt} />
        </div>
        <div className="slider-box-info">
          <p className="slider-box-desc">{description}</p>
          <h3 className="slider-box-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SliderBox;

import React from "react";

import Link from "../../Link/Link";

import "./ServiceBox.scss";

const ServiceBox = ({ img, title, description, url }) => {
  return (
    <div className="service-box">
      <div className="service-box-content">
        <div className="service-box-img">
          <Link href={url}>
            <img src={img.url} alt={img.alt} />
          </Link>
        </div>
        <div className="service-box-info">
          <h3 className="service-box-title">{title}</h3>
          <p className="service-box-desc">{description}</p>
          <Link href={url} className={"service-box-link"}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;

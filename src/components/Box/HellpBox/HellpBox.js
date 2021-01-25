import React from "react";

import Link from "../../Link/Link";

import "./HellpBox.scss";

const HellpBox = ({ img, title, description, url }) => {
  return (
    <div className="hellp-box">
      <Link href={url} className="hellp-box-link">
        <div className="hellp-box-content">
          <div className="hellp-box-img">
            <img src={img.url} alt={img.alt} />
          </div>
          <div className="hellp-box-info">
            <div className="hellp-box-info-content">
              <h3 className="hellp-box-title">{title}</h3>
              <p className="hellp-box-desc">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HellpBox;

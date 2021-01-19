import React from "react";

import Link from "../../Link/Link";

import "./ProductBox.scss";

const ProductBox = ({ img, title, price }) => {
  return (
    <div className="product-box">
      <div className="productBox-image">
        <Link>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className="productBox-desc">
        <Link className="productBox-product-name">
          <h3>{title}</h3>
        </Link>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductBox;

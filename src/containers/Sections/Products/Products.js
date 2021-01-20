import React from "react";

import ProductBox from "../../../components/Box/ProductBox/ProductBox";

import { productsData } from "../../../data-mockup/product-mockup";

import dogImage from "../../../assets/img/products/1.png";

import "./Products.scss";

const Products = () => {
  return (
    <div className="section-products">
      <div className="container">
        <div className="products-title">
          <h3>Our Products</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus
            vel.
          </span>
        </div>
        <div className="products-content">
          <div className="products-image">
            <img src={dogImage} alt="Dog" />
          </div>
          <div className="product-list">
            {productsData.map((el) => {
              return (
                <div className="product-list-padding" key={el.id}>
                  <ProductBox img={el.img} title={el.title} price={el.price} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;

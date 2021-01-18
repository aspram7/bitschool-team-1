import React from "react";

import { galleryData } from "../../../data-mockup/gallery-mockup";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="section-gallery">
      <div className="container">
        <div className="gallery-info">
          <h2 className="gallery-info-title">Gallery</h2>
          <p className="gallery-info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
            inventore consectetur dolorum, voluptatum possimus temporibus vel.
          </p>
        </div>
      </div>
      <div className="gallery-images">
        <div className="gallery-images-items">
          {galleryData.map((el, index) => {
            return (
              <div
                className={`gallery-item ${index === 2 ? "big-img" : ""}`}
                key={el.id}
              >
                <img src={el.img.url} alt={el.img.alt} />
                <div className="gallery-item-overly">
                  <i className="icon-line-plus"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

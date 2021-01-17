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
        {galleryData.map((el) => {
          return (
            <div className="gallery-item" key={el.id}>
              <img src={el.img.url} alt={el.img.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;

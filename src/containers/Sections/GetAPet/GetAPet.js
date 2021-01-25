import React from "react";
import { Parallax } from "react-parallax";

import Button from "../../../components/Button/Button";
import image from "../../../assets/img/get-a-pet/section-bg.jpg";

import "./GetAPet.scss";

const GetAPet = () => {
  return (
    <Parallax bgImage={image} strength={700}>
      <div className="section-get-a-pet">
        <div className="container get-a-pet-media">
          <div className="get-a-pet-row">
            <p>want to adopt your a best friend?</p>
            <h3>Unconditional love is as close as your nearest Shelter.</h3>
            <Button className="button-light get-a-pet-btn">GET A PET NOW</Button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default GetAPet;

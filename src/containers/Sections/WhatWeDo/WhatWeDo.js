import React from "react";

import ServiceBox from "../../../components/Box/ServiceBox/ServiceBox";
import { serviceData } from "../../../data-mockup/service-mockup";

import "./WhatWeDo.scss";

const WhatWeDo = () => {
  return (
    <section className="section-whatwedo">
      <div className="container">
        <div className="whatwedo-info">
          <h2 className="whatwedo-info-title">What we Do</h2>
          <p className="whatwedo-info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
            inventore consectetur dolorum, voluptatum possimus temporibus vel
            ab, nesciunt quod!
          </p>
        </div>
        <div className="whatwedo-services">
          <div className="service-items">
            {serviceData.map((el) => {
              return (
                <div className="service-item">
                  <ServiceBox
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    description={el.description}
                    url={el.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

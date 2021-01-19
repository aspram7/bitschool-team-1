import React from "react";

import { neddHellpData } from "../../../data-mockup/need-hellp-mockup.js";
import HellpBox from "../../../components/Box/HellpBox/HellpBox"


import "./NeedHelp.scss";

const NeedHelp = () => {
  return (
    <section className="section-needhelp">
      <div className="container">
        <div className="needhelp-info">
          <h2 className="needhelp-info-title">Need Help?</h2>
          <p className="needhelp-info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
            inventore consectetur dolorum, voluptatum possimus temporibus vel.
          </p>
        </div>
        <div className="needhelp-properties">
          <div className="properties-items">
            {neddHellpData.map((el) => {
              return (
                <div className="properties-item" key={el.id}>
                  <HellpBox
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

export default NeedHelp;

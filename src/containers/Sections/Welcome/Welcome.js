import React from "react";

import Button from "../../../components/Button/Button";

import "./Welcome.scss";

const Welcome = () => {
  return (
    <section className="section-welcome">
      <div className="welcome-bg"></div>

      <div className="container">
        <div className="welcome-info">
          <h2 className="welcome-info-title">
            Dogs are not our whole Life,
            <br />
            But they make our Lives whole.
          </h2>
          <p className="welcome-info-desc">
            Nisl blandit adipisci gravida blandit soluta, explicabo orci,
            distinctio <br />
            duis unde provident suspendisse orci? Recusandae! Proident,
            <br />
            quos do mi cupidatat.
          </p>
          <div className="welocme-btn-content">
            <Button className="btn-welcome-join">Join Us Now</Button>
            <span>+</span>
            <Button className="btn-welcome-gift">
              <i className="icon-gift"></i>
            </Button>
            <em>Every month a surprise gift*</em>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

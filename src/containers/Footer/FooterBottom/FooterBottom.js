import React from "react";

import Link from "../../../components/Link/Link";

import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-content">
          <div className="reserver-by">Copyrights © 2020 All Rights Reserved by Canvas Inc.</div>
          <div className="our-online-pages">
            <Link href="#" className="social-icon si-facebook">
              <i className="icon-facebook"></i>
              <i className="icon-facebook"></i>
            </Link>
            <Link href="#" className="social-icon si-twitter">
              <i className="icon-twitter"></i>
              <i className="icon-twitter"></i>
            </Link>
            <Link href="#" className="social-icon si-gplus">
              <i className="icon-gplus"></i>
              <i className="icon-gplus"></i>
            </Link>
            <Link href="#" className="social-icon si-pinterest">
              <i className="icon-pinterest"></i>
              <i className="icon-pinterest"></i>
            </Link>
            <Link href="#" className="social-icon si-vimeo">
              <i className="icon-vimeo"></i>
              <i className="icon-vimeo"></i>
            </Link>
            <Link href="#" className="social-icon si-github">
              <i className="icon-github"></i>
              <i className="icon-github"></i>
            </Link>
            <Link href="#" className="social-icon si-yahoo">
              <i className="icon-yahoo"></i>
              <i className="icon-yahoo"></i>
            </Link>
            <Link href="#" className="social-icon si-linkedin">
              <i className="icon-linkedin"></i>
              <i className="icon-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

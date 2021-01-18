import React from "react";

import Link from "../../components/Link/Link";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";


import "./Footer.scss";

const Footer = () => {
   return(
      <div className="footer-main">
         <FooterTop /> 
         <FooterBottom /> 
      </div>
   )
};

export default Footer;


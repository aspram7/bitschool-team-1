import React from "react";

import Link from "../../../components/Link/Link";

import "./FooterBottom.scss";

const FooterBottom = () => {
   return(
      <div className="footer-bottom">
         <div className="container">
            <div className="footer-bottom-content">
               <div className="reserver-by"> 
							Copyrights © 2020 All Rights Reserved by Canvas Inc.	
               </div>
               <div className="our-online-pages">
                  <a href="#" className="fb">
                     <i className="icon-facebook"></i>
                     <i className="icon-facebook"></i>
                  </a>
                  <a href="#" className="twitter">
                     <i className="icon-twitter"></i>
                     <i className="icon-twitter"></i>
                  </a>
                  <a href="#" className="gplus">
                     <i className="icon-gplus"></i>
                     <i className="icon-gplus"></i>
                  </a>
                  <a href="#" className="pinterest">
                     <i className="icon-pinterest"></i>
                     <i className="icon-pinterest"></i>
                  </a>
                  <a href="#" className="vimeo">
                     <i className="icon-vimeo"></i>
                     <i className="icon-vimeo"></i>
                  </a>
                  <a href="#" className="github">
                     <i className="icon-github"></i>
                     <i className="icon-github"></i>
                  </a>
                  <a href="#" className="yahoo">
                     <i className="icon-yahoo"></i>
                     <i className="icon-yahoo"></i>
                  </a>
                  <a href="#" className="linkedin">
                     <i className="icon-linkedin"></i>
                     <i className="icon-linkedin"></i>
                  </a>

               </div>
            </div>
         </div>
      </div>  
   )
};

export default FooterBottom;


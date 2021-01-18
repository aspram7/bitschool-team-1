import React from "react";

import Link from "../../../components/Link/Link";

import "./FooterTop.scss";

const FooterTop = () => {
   return(
      <div className="footer-top">
         <div className="container">
            <div className="footer-top-content">
                <div className="about-us">
                   <div className="about-us-content">
                      <p className="content-designe">
                         We belive in <b>Simple</b>, <b>Creative</b> & 
                         <br/>  <b> Flexible</b>Designe Standarts.
                      </p>
                      <br/>
                      <div className="contacts">
                          <address>
                              <b>Headquarters:</b>
                              <br/>
                              795 Folsom Ave. Suite600
                              <br/>
                              San Francisco, CA 94107
                           </address>
                           <br/> 
                           <abbr title="Phone Number"> <b>Phone:</b> </abbr>
                           (1) 8547 632521
                           <br/>
                           <abbr title="Fax"><b>Fax:</b></abbr>
                           (1) 11 4752 1433
                           <br/>
                           <abbr title="Email Adress"><b>Email:</b></abbr>
                           infi@canvas.com

                      </div>
                   </div>
                </div>
                <div className="blogroll">
                   <div className="blogroll-content">
                      <h4>BLOGROLL</h4>
                      <ul>
                         <li>
                            >  <a href="https://codex.wordpress.org/"> Documentation</a>
                         </li>
                         <li>
                            >  <a href="https://wordpress.org/support/forum/requests-and-feedback/"> Feedback</a>
                         </li>
                         <li>
                            >  <a href="https://wordpress.org/plugins/">   Plugins</a>
                         </li>
                         <li>
                            > <a href="https://wordpress.org/support/">  Support Forums</a>
                         </li>
                         <li>
                           > <a href="https://wordpress.org/themes/">  Themes</a>
                         </li>
                         <li>
                            > <a href="https://wordpress.org/news/">Canvas Blog</a>
                         </li>
                         <li>
                            > <a href="https://planet.wordpress.org/"> Canvas Planet</a>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className="blogroll-new">
                <div className="blogroll-new-content">
                      <h4>BLOGROLL</h4>
                      <ul>
                         <li>
                            >  <a href="https://codex.wordpress.org/"> Documentation</a>
                         </li>
                         <li>
                            >  <a href="https://wordpress.org/support/forum/requests-and-feedback/"> Feedback</a>
                         </li>
                         <li>
                            >  <a href="https://wordpress.org/plugins/">   Plugins</a>
                         </li>
                         <li>
                            > <a href="https://wordpress.org/support/">  Support Forums</a>
                         </li>
                         <li>
                           > <a href="https://wordpress.org/themes/">  Themes</a>
                         </li>
                         <li>
                            > <a href="https://wordpress.org/news/">Canvas Blog</a>
                         </li>
                         <li>
                            > <a href="https://planet.wordpress.org/"> Canvas Planet</a>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className="sales">
                   <div className="sales-content">
                      <h3>
                         Exclusive sales
                         <br/><br/>
                         Get <span >20%</span>Off*
                      </h3>
                      <br/>
                      <span className=" couponecode">Couponecode: <b>loveconvas</b></span>
                      <br/>
                      <em><small>(First time Register only)</small></em>
                   </div>
                </div>
            </div>
         </div>
      </div>  
   )
};

export default FooterTop;


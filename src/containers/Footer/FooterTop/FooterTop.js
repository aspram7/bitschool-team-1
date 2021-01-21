import React from "react";

import Link from "../../../components/Link/Link";
import { footerData } from "../../../data-mockup/footer-mockup";
import "./FooterTop.scss";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top-items">
          <div className="footer-top-item about-us">
            <div className="about-us-content">
              <p className="content-designe">
                We belive in <b>Simple</b>, <b>Creative</b> &amp;{" "}
                <b>Flexible </b>Designe Standarts.
              </p>
              <br />
              <div className="contacts">
                <address>
                  <b>Headquarters:</b>
                  <br />
                  795 Folsom Ave. Suite600
                  <br />
                  San Francisco, CA 94107
                </address>
                <br />
                <abbr title="Phone Number">
                  {" "}
                  <b>Phone: </b>{" "}
                </abbr>
                (1) 8547 632521
                <br />
                <abbr title="Fax">
                  <b>Fax: </b>
                </abbr>
                (1) 11 4752 1433
                <br />
                <abbr title="Email Adress">
                  <b>Email: </b>
                </abbr>
                info@canvas.com
              </div>
            </div>
          </div>
          {footerData.map((column) => {
            return (
              <div
                className={`footer-top-item item-${column.id}`}
                key={column.id}
              >
                <div className="blogroll-content">
                  <h4 className="footer-top-item-hedline">{column.title}</h4>
                  <ul className="footer-top-item-list">
                    {column.content.map((item) => {
                      return (
                        <li key={item.id}>
                          <i className="icon-angle-right"></i>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
         <div className="footer-top-item sales">
            <div className="sales-content">
              <h3>
                Exclusive sales
                <br />
                <br />
                Get <span>20%</span> Off*
              </h3>
              <span className="coupon-code">
                Coupon code: <b>loveconvas</b>
              </span>
              <br />
              <em>
                <small>(First time Register only)</small>
              </em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

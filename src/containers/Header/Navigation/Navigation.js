import React from "react";

import Link from "../../../components/Link/Link";
import Button from "../../../components/Button/Button";

import "./Navigation.scss";

const Navigation = ({ className }) => {
  return (
    <div className={`main-navigation ${className}`}>
            <ul className="main-navigation-menu">
                <li className="nav-item">
                    <Link href="#" className="nav-item-link">About us</Link>      
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-item-link">Community</Link>      
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-item-link">FAQs</Link>      
                </li>
                <li className="nav-item btn-registr">
                    <Button className="btn-nav-item">Register</Button>      
                </li>
            </ul>
    </div>
  );
};

export default Navigation;

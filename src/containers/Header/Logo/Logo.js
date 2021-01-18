import React from "react";

import  Link  from "../../../components/Link/Link";

import "./Logo.scss";

const Logo = ({url, imgLink, imgAlt}) => {
  return (<div className="header-logo-main">
      <Link href={url} className={'header-logo-main-link'}>
        <picture>
            <img src={imgLink} alt={imgAlt} className="header-logo-main-img" />
        </picture>
      </Link>
  </div>);
};

export default Logo;

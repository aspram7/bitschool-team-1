import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return <main className="main-component">{children}</main>;
};

export default Layout;

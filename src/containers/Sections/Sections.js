import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import JoinUs from "./JoinUs/JoinUs";
import Gallery from "./Gallery/Gallery";
import Products from "./Products/Products";
import GetAPet from "./GetAPet/GetAPet";
import NeedHelp from "./NeedHelp/NeedHelp";

const Sections = () => {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <JoinUs />
      <Gallery />
      <Products />
      <GetAPet />
      <NeedHelp />
    </>
  );
};

export default Sections;

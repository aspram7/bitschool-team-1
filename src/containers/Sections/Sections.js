import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import JoinUs from "./JoinUs/JoinUs";
import Gallery from "./Gallery/Gallery";
import GetAPet from "./GetAPet/GetAPet";


const Sections = () => {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <JoinUs />
      <Gallery />
      <GetAPet />
    </>
  );
};

export default Sections;

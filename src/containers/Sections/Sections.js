import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import JoinUs from "./JoinUs/JoinUs";
import Gallery from "./Gallery/Gallery";

const Sections = () => {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <JoinUs />
      <Gallery />
    </>
  );
};

export default Sections;

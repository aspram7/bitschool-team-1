import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import JoinUs from "./JoinUs/JoinUs";
import GetAPet from "./GetAPet/GetAPet";

const Sections = () => {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <JoinUs />
      <GetAPet />
    </>
  );
};

export default Sections;

import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import GetAPet from "./GetAPet/GetAPet";

const Sections = () => {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <GetAPet />
      <div style={{ marginBottom: "800px" }}></div>
    </>
  );
};

export default Sections;

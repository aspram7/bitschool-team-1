import React from "react";

import Layout from "./components/Layout/Layout";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Layout>
        <Auth />
      </Layout>
    </div>
  );
}

export default App;

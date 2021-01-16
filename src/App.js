import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Sections from "./containers/Sections/Sections";
import "./styles/all.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Layout>
        <Sections />
      </Layout>
    </div>
  );
}

export default App;

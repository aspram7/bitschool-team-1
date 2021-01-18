import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import "./styles/all.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Layout></Layout>
      <Footer />
    </div>
  );
}

export default App;

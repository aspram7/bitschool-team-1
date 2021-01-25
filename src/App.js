import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Sections from "./containers/Sections/Sections";
import Footer from "./containers/Footer/Footer";
import GoToTop from "./containers/GoToTop/GoToTop";

import "./styles/all.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Layout>
        <Sections />
      </Layout>
      <Footer />
      <GoToTop/>
    </div>
  );
}

export default App;

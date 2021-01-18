import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Sections from "./containers/Sections/Sections";
import Footer from "./containers/Footer/Footer";

import "./styles/all.scss";

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className="app-wrapper">
      <Header />
      <Layout>
        <Sections />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

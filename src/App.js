<<<<<<< HEAD
import "./App.css";

function App() {
  return <div className="App"></div>;
=======
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
>>>>>>> 85be923c1340523f2f93493ddf365ccca12b662c
}

export default App;

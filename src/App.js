import React from "react";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* for example next 2 lines */}
        <Button name="Click me" />
        <i class="icon-gift"></i>
      </Layout>
    </div>
  );
}

export default App;

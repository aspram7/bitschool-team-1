import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Auth from "../src/containers/Auth/Auth";
import Modal from "../src/components/Modal/Modal";
import Button from "../src/components/Button/Button";
import Login from "../src/containers/Auth/Login/Login";

import "./styles/all.scss";

function App() {
  // const [show, setShow] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="app-wrapper">
      <Button onClick={toggleModal}>open modal</Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Login />
        </Modal>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";

import Link from "../../../components/Link/Link";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import Auth from "../../Auth/Auth";

import "./Navigation.scss";

const Navigation = ({ className }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <div className={`main-navigation ${className}`}>
      <ul className="main-navigation-menu">
        <li className="nav-item">
          <Link href="#" className="nav-item-link">
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-item-link">
            Community
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-item-link">
            FAQs
          </Link>
        </li>
        <li className="nav-item btn-registr">
          <Button className="btn-nav-item" onClick={toggleModal}>
            Register
          </Button>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <Auth />
            </Modal>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

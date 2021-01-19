import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

const body = document.querySelector("body");
const modalRoot = document.createElement("div");
const el = document.createElement("div");

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    body.appendChild(modalRoot);
    modalRoot.classList.add("modal");
    modalRoot.appendChild(el);
    el.classList.add("modal-child");
    document.body.style.overflow = "hidden";

    const f = (e) => {
      if (!el.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", f, true);

    return () => {
      body.removeChild(modalRoot);
      window.removeEventListener("click", f, true);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return createPortal(<ContentModal onClose={onClose}>{children}</ContentModal>, el);
};

const ContentModal = ({ children, onClose }) => {
  return (
    <>
      <div className="modal-header">
        <button onClick={onClose}>
          <i className="icon-window-close1"></i>
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </>
  );
};

export default Modal;

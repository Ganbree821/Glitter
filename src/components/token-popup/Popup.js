import React from "react";
import "./index.css";
const Popup = ({ setOpenTokenModal }) => {
  return (
    <section className="popup">
      <div className="main">
        <div className="class">
          <h1>$XGLI Public Sale</h1>
          <p>Public Sale Address:</p>
          <p>D1PPoKckMfq46MZ93TwDW3Xkrqr82amdKg6ffeCkVLNK</p>
          <p>
            Allowed Currencies: <span>SOL</span>
          </p>
        </div>
        <div className="right">
          <img src="../../../sol-logo.jpeg" alt="logo" />
        </div>
      </div>

      <p onClick={() => setOpenTokenModal(false)}>X</p>
    </section>
  );
};

export default Popup;

import React, { useState } from "react";
import "./index.css";

const Popup = ({ setOpenMiniPopUp, miniPopupData }) => {
  const [value, setValue] = useState(0);

  function randomInteger() {
    return (
      Math.floor(
        Math.random() * (miniPopupData.end - miniPopupData.start + 1)
      ) + miniPopupData.start
    );
  }
  return (
    <section className="mini-popup">
      <div className="left">
        <span>{randomInteger()} $XGLI</span>
        <p>Have just been purchased.</p>
      </div>

      <p onClick={() => setOpenMiniPopUp(false)}>x</p>
    </section>
  );
};

export default Popup;

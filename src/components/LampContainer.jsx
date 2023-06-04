import React from "react";
const Lamp = ({ light }) => {
  return (
    <div className="lamp-container">
      <img src="/image/lamp.png" alt="lampimage" className="lamp" />
      <img
        src="/image/light.png"
        alt={light + "value is"}
        className={"light " + (light === false ? "light-off" : " ")}
        id="opacityCtrl"
      />
    </div>
  );
};
export default Lamp;

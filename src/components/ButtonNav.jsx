import { useState } from "react";

const Button = ({ setLight }) => {
  const [active, setActive] = useState(false);
  const Button = () => {
    setActive(!active);
    setLight(active);
  };
  return (
    <button
      type="button"
      className={active === true ? "active" : " "}
      onClick={Button}
    >
      <span className="switchBtn"></span>
    </button>
  );
};
export default Button;

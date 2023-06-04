import React from "react";
const Text = () => {
  return (
    <div className="text-container">
      <h1>
        Latest <br />
        lighting
      </h1>
      <p>
        This is the frist from our company. we're making a huge collection of
        modern Lamps ll categories from home use to office use.
      </p>
      <a href="http://">check all Collections</a>
      <div className="control">
        <div className="field">
          <span className="value left">0</span>
          <input type="range" min="0" />
          <span className="value right">100</span>
        </div>
      </div>
    </div>
  );
};
export default Text;

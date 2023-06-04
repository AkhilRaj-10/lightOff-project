import React from "react";
const VueImages = (props) => {
  return (
    <div className="BrandImg">
      <img
        src={"/image/" + props.path}
        alt={props.desp}
        className={props.className}
      />
    </div>
  );
};
export default VueImages;

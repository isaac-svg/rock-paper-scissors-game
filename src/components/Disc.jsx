import React from "react";

const Disc = ({ name, icon, position }) => {
  return (
    <div className={`disc ${position}`} id={`${name}`}>
      <img src={`${icon}`} alt="disc icon" className="disc__icon" />
    </div>
  );
};

export default Disc;

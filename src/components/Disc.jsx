import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";

const Disc = ({ name, icon, position }) => {
  const { updateChoice, setShowDecisionPage, allowChange } =
    useContext(gameContext);
  return (
    <div
      className={`disc ${position}`}
      id={`${name}`}
      onClick={() => {
        allowChange && updateChoice({ name, icon });
        setShowDecisionPage(true);
      }}
    >
      <img src={`${icon}`} alt="disc icon" className="disc__icon" />
    </div>
  );
};

export default Disc;

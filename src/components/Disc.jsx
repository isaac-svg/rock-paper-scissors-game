import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";

const Disc = ({ name, icon, position }) => {
  const { updateChoice, setShowDecisionPage, allowChange, setGameObject } =
    useContext(gameContext);
  return (
    <div
      className={`disc ${position}`}
      id={`${name}`}
      onClick={() => {
        allowChange && updateChoice({ name, icon });
        // updateChoice(name, icon);
        console.log("allow Change", allowChange);
        setShowDecisionPage(true);
        console.log({ name, icon }, "from Disc component");
      }}
    >
      <img src={`${icon}`} alt="disc icon" className="disc__icon" />
    </div>
  );
};

export default Disc;

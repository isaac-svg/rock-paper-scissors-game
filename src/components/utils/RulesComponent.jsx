import React, { useContext } from "react";
import { gameContext } from "../../ganecontext/GameContext";
import "./Rules.css";
const RulesComponent = () => {
  const { setShowRules } = useContext(gameContext);
  /**
   * @param  e  event object  ,
   *  The  function returns null but uses event delegation to check if the user clicked on the modal outside the the image for larger screens or the user clicked on the close icon and if the user did, the showRules state is set to false
   *  */
  const closeRules = (e) => {
    (e.target.id === "parent" || e.target.id === "child") &&
      setShowRules(false);
  };
  return (
    <aside className="rules__container" onClick={closeRules} id="parent">
      <div className="rules__card">
        <img src="images/image-rules-bonus.svg" alt="rules image" />
        <img
          src="images/icon-close.svg"
          alt="close button for rules card"
          className="close__rules__icon"
          id="child"
        />
      </div>
    </aside>
  );
};

export default RulesComponent;

import { createContext, useState } from "react";
export const gameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  const [gameObject, setGameObject] = useState({
    name: "",
    img: "",
  });
  /**
   state to show and hide the decision making component i.e DecisionComponent
   */
  /*
  this state hides and displays the choice component based on the state. */
  const [showChoicePage, setShowChoicePage] = useState(false);
  /*
 template for the card component the only unique features about each card  are the name and the image
*/

  /** 
function to set set the state of the gameObject that is the choice
@param  choice
 this takes the state and updates it with the name and img url of the card xclicked 
*/
  const updateChoice = (choice) => {
    setGameObject({ name: choice.name, img: choice.img });
  };
  /*
  state to check the condition of rules modal either true or false
  */
  const [showRules, setShowRules] = useState(false);
  return (
    <gameContext.Provider
      value={{ updateChoice, gameObject, showRules, setShowRules }}
    >
      {children}
    </gameContext.Provider>
  );
};
export default GameContextProvider;

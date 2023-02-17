import { createContext, useState } from "react";
export const gameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  /*
 interface for the card component the only unique features about each card  are the name and the image
*/
  const [gameObject, setGameObject] = useState({
    name: "",
    icon: "",
  });
  // console.log(gameObject, "from context");

  // clear game object after the user clicks play again
  /*
 interface for the computer choice 
 the holds the sets the state of the computer choice
*/
  const [computerChoiceGameObject, setComputerChoiceGameObject] = useState({
    name: "",
    icon: "",
  });
  /**
   state to show and hide the decision making component i.e DecisionComponent
   */
  const [showDecisionPage, setShowDecisionPage] = useState(false);
  /*
  this state hides and displays the choice component based on the state. */
  const [showComputerChoice, setShowComputerChoice] = useState(false);

  /** 
function to set set the state of the gameObject that is the choice
@param  choice
 this takes the state and updates it with the name and img url of the card xclicked 
*/
  const updateChoice = ({ name, icon }) => {
    setGameObject({ name, icon });
    console.log(gameObject, "from updateChoice");
  };
  /*
  state to check the condition of rules modal either true or false
  */
  const [showRules, setShowRules] = useState(false);
  /**
   * state to prevent change of choice after computer making choice
   */
  const [allowChange, setAllowChange] = useState(true);
  /**
   score state  
   */
  const [score, setScore] = useState(0);
  /**
 winner state  
   */
  const [declareWinner, setDeclareWinner] = useState(false);

  // state to to manipulate the winning or lossing text

  const [userWin, setUserWin] = useState(false);
  // state to to manipulate the drawing of choices

  const [playersDraw, setPlayersDraw] = useState(false);
  return (
    <gameContext.Provider
      value={{
        updateChoice,
        gameObject,
        setGameObject,
        showRules,
        setShowRules,
        showDecisionPage,
        setShowDecisionPage,
        allowChange,
        setAllowChange,
        setShowComputerChoice,
        showComputerChoice,
        score,
        computerChoiceGameObject,
        setComputerChoiceGameObject,
        setScore,
        setDeclareWinner,
        declareWinner,
        userWin,
        setUserWin,
        setPlayersDraw,
        playersDraw,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};
export default GameContextProvider;

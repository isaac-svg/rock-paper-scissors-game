const scissorsWinsAgainst = {
  paper: "paper",
  lizard: "lizard",
};
const paperWinsAgainst = {
  rock: "rock",
  spock: "spock",
};
const rockWinsAgainst = {
  scissors: "scissors",
  lizard: "lizard",
};
const lizardWinsAgainst = {
  paper: "paper",
  spock: "spock",
};
const spockWinsAgainst = {
  scissors: "scissors",
  rock: "rock",
};

const userLose = (setScore, state, declareWinner, declareDraw, setUserWin) => {
  setScore((state -= 1));
  declareDraw(false);
  declareWinner(true);
  setUserWin(false);
};
const userWins = (setScore, state, declareWinner, setUserWin) => {
  setScore((state += 1));
  declareWinner(true);
  setUserWin(true);
};
const chooseWinner = (
  userChoice,
  computerChoice,
  setScore,
  state,
  setUserWin,
  declareWinner,
  declareDraw
) => {
  // console.log(computerChoice , "checking computer choice from choose winner function")
  switch (userChoice) {
    case "scissors": {
      if (computerChoice == "scissors") {
        declareDraw(true);
        setScore(state);

        // declareWinner(false);
      } else if (scissorsWinsAgainst[computerChoice]) {
        userWins(setScore, state, declareWinner, setUserWin);
      } else {
        userLose(setScore, state, declareWinner, declareDraw, setUserWin);
      }
      break;
    }
    case "lizard": {
      if (computerChoice == "lizard") {
        declareDraw(true);
        // setScore((state = state));
        // declareWinner(false);
      } else if (lizardWinsAgainst[computerChoice]) {
        userWins(setScore, state, declareWinner, setUserWin);
      } else {
        userLose(setScore, state, declareWinner, declareDraw, setUserWin);
      }
      break;
    }
    case "spock": {
      if (computerChoice == "spock") {
        declareDraw(true);
        setScore((state));
        // declareWinner(true);
      } else if (spockWinsAgainst[computerChoice]) {
        userWins(setScore, state, declareWinner, setUserWin);
      } else {
        userLose(setScore, state, declareWinner, declareDraw, setUserWin);
      }
      break;
    }
    case "rock": {
      if (computerChoice == "rock") {
        declareDraw(true);
        setScore((state));
        // declareWinner(true);
      } else if (rockWinsAgainst[computerChoice]) {
        userWins(setScore, state, declareWinner, setUserWin);
      } else {
        userLose(setScore, state, declareWinner, declareDraw, setUserWin);
      }
      break;
    }
    case "paper": {
      if (computerChoice == "paper") {
        declareDraw(true);
        setScore((state));
        // declareWinner(true);
      } else if (paperWinsAgainst[computerChoice]) {
        userWins(setScore, state, declareWinner, setUserWin);
      } else {
        userLose(setScore, state, declareWinner, declareDraw, setUserWin);
      }
      break;
    }

    default:
      console.log("default");
      break;
  }
};

export default chooseWinner;

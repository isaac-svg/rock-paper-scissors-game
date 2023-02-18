const scissorsWinsAgainst = {
  paper: "paper",
  lizard: "lizard",
};
const paperWinsAgainst = {
  lizard: "lizard",
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

<<<<<<< HEAD
=======
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
>>>>>>> 9ea6bee (refactored choseWinner)
const chooseWinner = (
  userChoice,
  computerChoice,
  setScore,
  state,
<<<<<<< HEAD
  declareWinner,
  declareDraw
) => {
  if (
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "lizard") ||
    (userChoice === "paper" && computerChoice === "lizard") ||
    (userChoice === "paper" && computerChoice === "spock") ||
    (userChoice === "rock" && computerChoice === "lizard") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "lizard" && computerChoice === "spock") ||
    (userChoice === "lizard" && computerChoice === "paper") ||
    (userChoice === "spock" && computerChoice === "scissors") ||
    (userChoice === "spock" && computerChoice === "rock")
  ) {
    setScore((state += 1));
    declareWinner(true);
  } else if (userChoice === computerChoice) {
    setScore((state = state));
    // declareWinner(true);
    declareDraw(true);
  } else {
    setScore((state -= 1));
    declareWinner(true);
=======
  setUserWin,
  declareWinner,
  declareDraw
) => {
  switch (userChoice) {
    case "scissors": {
      if (computerChoice == "scissors") {
        declareDraw(true);
        setScore((state = state));

        declareWinner(true);
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
        setScore((state = state));
        declareWinner(true);
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
        setScore((state = state));
        declareWinner(true);
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
        setScore((state = state));
        declareWinner(true);
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
        setScore((state = state));
        declareWinner(true);
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
>>>>>>> 9ea6bee (refactored choseWinner)
  }
};

export default chooseWinner;

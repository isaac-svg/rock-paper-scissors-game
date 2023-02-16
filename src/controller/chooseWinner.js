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

const chooseWinner = (
  userChoice,
  computerChoice,
  setScore,
  state,
  declareWinner
) => {
  console.log({ userChoice, computerChoice, setScore, state, declareWinner });
  console.log(
    userChoice === "scissors" && scissorsWinsAgainst[computerChoice],
    userChoice === "paper" && paperWinsAgainst[computerChoice],
    userChoice === "rock" && rockWinsAgainst[computerChoice],
    userChoice === "lizard" && lizardWinsAgainst[computerChoice],
    userChoice === "spock" && spockWinsAgainst[computerChoice],
    "dynamic"
  );
  switch (true) {
    case userChoice === "scissors" && scissorsWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case userChoice === "paper" && paperWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case userChoice === "rock" && rockWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case userChoice === "lizard" && lizardWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case userChoice === "spock" && spockWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case computerChoice === "scissors" && scissorsWinsAgainst[userChoice]:

    case computerChoice === "paper" && paperWinsAgainst[userChoice]:
    case computerChoice === "rock" && rockWinsAgainst[userChoice]:
    case computerChoice === "lizard" && lizardWinsAgainst[userChoice]:
    case computerChoice === "spock" && spockWinsAgainst[userChoice]:
      setScore((state -= 1));
      declareWinner(true);
      break;
    default:
      console.log("nothing done in switch");
      break;
  }
};

export default chooseWinner;

/**case userChoice === "scissors" && scissorsWinsAgainst[computerChoice]:
      setScore((state += 1));
      declareWinner(true);
      break;
    case userChoice === "paper" && paperWinsAgainst[computerChoice]:
      setScore((state + 1));
      declareWinner(true);
      break;
    case userChoice === "rock" && rockWinsAgainst[computerChoice]:
      setScore((state +1));
      declareWinner(true);
      break;
    case userChoice === "lizard" && lizardWinsAgainst[computerChoice]:
      setScore((state +1));
      declareWinner(true);
      break;
    case userChoice === "spock" && spockWinsAgainst[computerChoice]:
      setScore((state +1));
      declareWinner(true);
      break;
 */

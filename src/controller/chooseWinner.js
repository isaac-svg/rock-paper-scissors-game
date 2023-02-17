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
  }
};

export default chooseWinner;

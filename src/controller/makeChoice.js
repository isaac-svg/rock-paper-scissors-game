const posibleComputerChoices = [
  { name: "rock", icon: "images/icon-rock.svg" },

  { name: "lizard", icon: "images/icon-lizard.svg" },
  { name: "paper", icon: "images/icon-paper.svg" },
  { name: "scissors", icon: "images/icon-scissors.svg" },
  { name: "spock", icon: "images/icon-spock.svg" },
  { name: "lizard", icon: "images/icon-lizard.svg" },
  { name: "scissors", icon: "images/icon-scissors.svg" },
  { name: "paper", icon: "images/icon-paper.svg" },
  { name: "spock", icon: "images/icon-spock.svg" },
  { name: "rock", icon: "images/icon-rock.svg" },
];
/**
 * @returns computer choice after 1.5s
 * @function useGame picks a random choice each time it is invoked
 */
const makeChoice = () => {
  console.log("pseudo is called");
  const computerChoice =
    posibleComputerChoices[
      Math.floor(Math.random() * (posibleComputerChoices.length - 1))
    ];
  console.log(computerChoice, "from computer");
  return computerChoice;
};

export default makeChoice;

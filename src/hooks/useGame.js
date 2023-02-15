const posibleComputerChoices = [
  { name: "rock", icon: "images/icon-rock.svg" },
  { name: "lizard", icon: "images/icon-lizard.svg" },
  { name: "paper", icon: "images/icon-paper.svg" },
  { name: "scissors", icon: "images/icon-scissors.svg" },
  { name: "spock", icon: "images/icon-spock.svg" },
];
/**
 * @returns computer choice
 * @function useGame picks a random choice each time it is invoked
 */
const useGame = () => {
  const computerChoice =
    posibleComputerChoices[
      Math.floor(Math.random() * posibleComputerChoices.length)
    ];
  return computerChoice;
};

export default useGame;

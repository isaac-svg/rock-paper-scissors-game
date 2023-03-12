<<<<<<< HEAD
[live site](https://rock-paper-scissors-game-wine.vercel.app/)

This is a solution to a frontend mentor challenge
=======
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
declareDraw(false);
declareWinner(true);
} else if (userChoice === computerChoice) {
setScore((state = state));
// declareWinner(true);
declareDraw(true);
} else {
setScore((state -= 1));
declareDraw(false);
declareWinner(true);
}
>>>>>>> 9ea6bee (refactored choseWinner)

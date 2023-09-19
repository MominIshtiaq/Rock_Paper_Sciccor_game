const getComputerChoice = () => {
  let computerChoice = "";
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      computerChoice = "✊";
      break;
    case 1:
      computerChoice = "✋";
      break;
    case 2:
      computerChoice = "✌️";
      break;
  }
  return computerChoice;
};
const playRound = (playerChoice, computerChoice) => {
  let flag = 0;
  if (playerChoice === computerChoice) {
    flag = -1;
  } else if (playerChoice === "✊" && computerChoice === "✌️") {
    flag = 1;
  } else if (playerChoice === "✊" && computerChoice === "✋") {
  } else if (playerChoice === "✌️" && computerChoice === "✊") {
  } else if (playerChoice === "✌️" && computerChoice === "✋") {
    flag = 1;
  } else if (playerChoice === "✋" && computerChoice === "✊") {
    flag = 1;
  } else if (playerChoice === "✋" && computerChoice === "✌️") {
  }
  return flag;
};

// Selecting html element using javascript

const result = document.querySelector(".result h1");
const moves = document.querySelectorAll(".symbols .symbol");
const buttons = document.querySelectorAll(".btn_select");
const playerMove = moves[0];
const computerMove = moves[1];

result.textContent = "Hello There!";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.innerHTML;
    playerMove.textContent = playerChoice;
    computerMove.textContent = computerChoice;
    const score = playRound(playerChoice, computerChoice);
    if (score === 1) {
      result.textContent = "You Win!";
      finalScore++;
    } else if (score === 0) {
      result.textContent = "You Lose!";
    } else if (score === -1) {
      result.textContent = "Draw!";
    }
  });
});

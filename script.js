let playerName = "";
let totalRounds = 3;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function submitName() {
  const name = document.getElementById("playerNameInput").value.trim();
  if (!name) return;
  playerName = name;
  document.getElementById("displayName").innerText = name;
  document.getElementById("namePage").style.display = "none";
  document.getElementById("modePage").style.display = "block";
}

function startGame(rounds) {
  totalRounds = rounds;
  currentRound = 0;
  playerScore = 0;
  computerScore = 0;
  document.getElementById("roundInfo").innerText = "";
  document.getElementById("scoreInfo").innerText = "";
  document.getElementById("resultArea").innerText = "";
  document.getElementById("modePage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
  updateInfo();
}

function makeMove(playerMove) {
  if (currentRound >= totalRounds) return;
  const options = ["rock", "paper", "scissors"];
  const computerMove = options[Math.floor(Math.random() * 3)];

  let result = "";
  if (playerMove === computerMove) {
    result = "Draw!";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = `${playerName} wins this round!`;
    playerScore++;
  } else {
    result = "Computer wins this round!";
    computerScore++;
  }

  currentRound++;
  document.getElementById("resultArea").innerText = 
    `You chose ${playerMove} | Computer chose ${computerMove}\n${result}`;

  updateInfo();

  if (currentRound >= totalRounds) {
    setTimeout(showFinalResult, 1000);
  }
}

function updateInfo() {
  document.getElementById("roundInfo").innerText = `Round ${currentRound + 1} of ${totalRounds}`;
  document.getElementById("scoreInfo").innerText = `${playerName}: ${playerScore} | Computer: ${computerScore}`;
}

function showFinalResult() {
  let message = "";
  if (playerScore > computerScore) {
    message = `${playerName} Wins the Game!`;
  } else if (playerScore < computerScore) {
    message = "Computer Wins the Game!";
  } else {
    message = "It's a Draw!";
  }
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("popup").style.display = "block";
}

function backToMenu() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("modePage").style.display = "block";
}

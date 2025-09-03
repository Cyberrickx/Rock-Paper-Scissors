let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelectorAll(".score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let indicator = document.querySelectorAll(".choice");

function genCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function win() {
  userScore++;
  userScore_span.textContent = userScore;
}

function lose() {
  compScore++;
  compScore_span.textContent = compScore;
}

function draw() {   
}

function game(userChoice) {
  const compChoice = genCompChoice();

  switch (userChoice + compChoice) {
    case "rockscissors":
      result_div.textContent = "Rock breaks scissors. You win!";
      win();
      break;
    case "paperrock":
      result_div.textContent = "Paper covers rock. You win!";
      win();
      break;
    case "scissorspaper":
      result_div.textContent = "Scissors cuts paper. You win!";
      win();
      break;
    case "rockpaper":
      result_div.textContent = "Paper covers rock. You lose!";
      lose();
      break;
    case "paperscissors":
      result_div.textContent = "Scissors cuts paper. You lose!";
      lose();
      break;
    case "scissorsrock":
      result_div.textContent = "Rock breaks scissors. You lose!";
      lose();
      break;
    case "rockrock":
      result_div.textContent = "Rock Rock. It's a draw";
      draw();
      break;
    case "paperpaper":
      result_div.textContent = "Paper Paper. It's a draw";
      draw();
      break;
    case "scissorsscissors":
      result_div.textContent = "Scissors Scissors. It's a draw";
      draw();
      break;
  }
}

rock_div.addEventListener("click", function () {
  game("rock");
});

paper_div.addEventListener("click", function () {
  game("paper");
});

scissors_div.addEventListener("click", function () {
  game("scissors");
});

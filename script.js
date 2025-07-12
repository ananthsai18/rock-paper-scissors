let count = JSON.parse(localStorage.getItem("Scores")) || {
  wins: 0,
  draw: 0,
  losses: 0,
};
updatescore();

function playGame(a) {
  let result;
  let userOption = a;
  const r = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = choices[r];
  if (userOption === computerChoice) {
    result = "draw";
    count.draw += 1;
  } else if (
    (userOption === "Rock" && computerChoice === "Scissors") ||
    (userOption === "Paper" && computerChoice === "Rock") ||
    (userOption === "Scissors" && computerChoice === "Paper")
  ) {
    count.wins += 1;
    result = " You Won";
  } else {
    count.losses += 1;
    result = "You lost";
  }
  localStorage.setItem("Scores", JSON.stringify(count));
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-move"
  ).innerHTML = ` You <img class="imgi" src="./images/${userOption}-emoji.png" alt="userchoice" />
        <img class="imgi" src="./images/${computerChoice}-emoji.png" alt="computer choice" /> Computer`;
  updatescore();
}
function updatescore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${count.wins} losses: ${count.losses} ties: ${count.draw}`;
}

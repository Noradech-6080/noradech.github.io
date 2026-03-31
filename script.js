let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

function moveBox(){
  const x = Math.random() * (gameArea.clientWidth - 60);
  const y = Math.random() * (gameArea.clientHeight - 60);
  box.style.left = x + "px";
  box.style.top = y + "px";
}

box.addEventListener("click", () => {
  score++;
  scoreDisplay.innerText = score;
  moveBox();
});

moveBox();
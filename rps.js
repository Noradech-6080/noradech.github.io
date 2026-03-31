function play(player){
  const choices = ["rock","paper","scissors"];
  const computer = choices[Math.floor(Math.random()*3)];
  let result = "";

  if(player === computer) result = "Draw 😐";
  else if(
    (player==="rock" && computer==="scissors") ||
    (player==="paper" && computer==="rock") ||
    (player==="scissors" && computer==="paper")
  ) result = "You Win 🎉";
  else result = "You Lose 😢";

  document.getElementById("result").innerText =
    "You: " + player + " | CPU: " + computer + " → " + result;
}
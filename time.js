function updateTime(){
  const now = new Date();

  // เวลา
  const time = now.toLocaleTimeString();
  document.getElementById("clock").innerText = time;

  // วันที่
  const date = now.toDateString();
  document.getElementById("date").innerText = date;

  // Greeting
  const hour = now.getHours();
  let greeting = "";

  if(hour < 12) greeting = "Good Morning ☀️";
  else if(hour < 18) greeting = "Good Afternoon 🌤";
  else greeting = "Good Evening 🌙";

  document.getElementById("greeting").innerText = greeting;
}

setInterval(updateTime,1000);
updateTime();
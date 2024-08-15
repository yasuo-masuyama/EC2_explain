function displayJapanTime() {
  const timeDisplay = document.getElementById('time-display');
  const now = new Date();
  const japanTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const formattedTime = japanTime.toLocaleTimeString();

  timeDisplay.textContent = formattedTime;
}

displayJapanTime();
setInterval(displayJapanTime, 1000);

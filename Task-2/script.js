
// script.js

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function print(txt) {
  display.innerHTML = txt;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  isRunning = false;
  print("00:00:00");
  elapsedTime = 0;
  lapsList.innerHTML = "";
}

function lap() {
  if (isRunning) {
    const li = document.createElement("li");
    li.innerText = timeToString(elapsedTime);
    lapsList.appendChild(li);
  }
}

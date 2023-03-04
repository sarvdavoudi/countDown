let countDownTimeInSecond = 2 * 60;
let startVariable;
let isStarted = false; //define Flag for prevent more click on start button
let minutesShowBox = document.getElementById("minutes");
let secondsShowBox = document.getElementById("seconds");
let timerShowBox = document.getElementById("box");

//when click on start button
document.getElementById("btn_start").addEventListener("click", function start() {
  if (isStarted) return; //if isStarted=True ,start function will not execute
  isStarted = true;

  // Update the count down every 1 second ,setInterval works with millisecond ,1s=1000 ms
  startVariable = setInterval(function () {
    // decoupling =A function that does more detailed task
    counting();
  }, 1000);
});

function counting() {
  countDownTimeInSecond = countDownTimeInSecond - 1;
  let minutes = Math.floor(countDownTimeInSecond / 60);
  let seconds = countDownTimeInSecond % 60;
  updateDom(minutes, seconds);
  // If the count down is over, write some text
  if (minutes === 0 && seconds === 0) {
    clearInterval(startVariable);
    timerShowBox.innerHTML = "FINISH !";
  }
}

const updateDom = (minutes, seconds) => {
  minutesShowBox.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsShowBox.innerHTML = seconds < 10 ? "0" + seconds : seconds;
};

//when click on stop button
document.getElementById("btn_stop").addEventListener("click", function stop() {
  clearInterval(startVariable);
  isStarted = false;
});

//when click on reset button
document.getElementById("btn_reset").addEventListener("click", function reset() {
  clearInterval(startVariable);
  updateDom(0, 0);
  isStarted = false;
  countDownTimeInSecond = 2 * 60;
});

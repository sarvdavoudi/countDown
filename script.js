let countDownTimeInSecond = 2 * 60;
let startVariable;
let isStarted=false   //define Flag for prevent more click on start button


function start() {
    if(isStarted) return  //if isStarted=True ,start function will not execute
    isStarted=true
  // Update the count down every 1 second
  startVariable = setInterval(function () {
    countDownTimeInSecond = countDownTimeInSecond - 1;
    let minutes = Math.floor(countDownTimeInSecond / 60);
    let seconds = countDownTimeInSecond % 60;

    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is over, write some text
    if (minutes === 0 && seconds === 0) {
      clearInterval(startVariable);
      document.getElementById("main-box").innerHTML = "FINISH !";
     
    }
  }, 1000);
  
}

//when click on stop button
function stop() {
  clearInterval(startVariable);
   isStarted = false;
}

//when click on reset button
function reset() {
  clearInterval(startVariable);
  document.getElementById("minutes").innerHTML = "0" + "0";
  document.getElementById("seconds").innerHTML = "0" + "0";
   isStarted = false;
}




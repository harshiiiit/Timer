let timer;
let secondsElapsed = 0;
let isRunning = false;
let isReset = false;

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");


function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    //document.write(h + ":" + m + ":" + s);
    console.log(h + ":" + m + ":" + s);
    return;
}

function startTimer() {
    if(isRunning) return;
    isRunning = true;
    if(isReset) secondsElapsed = 0;
    timer = setInterval(() => {
        secondsElapsed++; // increment the seconds

        const minutes = Math.floor(secondsElapsed / 60); // Total minutes
        const seconds = secondsElapsed % 60; // Total seconds, reset after 60 seconds
        display.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    }, 1000);
}

function pauseTimer(){
    clearInterval(timer);
    isRunning = false;
}

function resetTimer(){
    clearInterval(timer); // Stop the running timer
    isRunning = false; // Reset the elapsed time
    display.innerHTML = "00:00"; // Reset the display
    isReset = true; // To reset the timer
}



startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
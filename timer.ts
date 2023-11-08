
const timerElement = document.getElementById("timer");
const inputTime = document.getElementById("inputTime") as HTMLInputElement;
const startButton = document.getElementById("start") as HTMLButtonElement;
const pauseButton = document.getElementById("pause") as HTMLButtonElement;

//TODO - finish early button
let pause = false;

let timeRemaining = parseInt(inputTime.value);
let interval: number;
let sound = new Audio("./Swoosh.mp3");


startButton.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
    }
    toggleButtonVisibility();
    //convert time to seconds
    timeRemaining = parseInt(inputTime.value) * 60;
    updateTimer(); // Initial display
    interval = setInterval(updateTimer, 1000); // Update the timer every second
});

pauseButton.addEventListener("click", () => {
    // change color of timerElement text
    pause = !pause;
    if (pause) {
        pauseButton.value = "Resume";
    } else {
        pauseButton.value = "Pause";
    }
    
});



function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (timerElement) {
        timerElement.textContent = timerString;
        timerElement.className = "timer-style";
    }

    if (timeRemaining === 0) {
        sound.play();
        toggleButtonVisibility();
        clearInterval(interval);
    } else {
        if (!pause) timeRemaining--;
    }
}
function toggleButtonVisibility() {
    startButton.hidden = !startButton.hidden;
    pauseButton.hidden = !pauseButton.hidden;
    inputTime.hidden = !inputTime.hidden;
}

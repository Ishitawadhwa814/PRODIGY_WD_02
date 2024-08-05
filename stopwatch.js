let timer;
let running = false;
let seconds = 0;

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById("startBtn").setAttribute("disabled", "disabled");
        document.getElementById("stopBtn").removeAttribute("disabled");
    }
}

function stopStopwatch() {
    running = false;
    clearInterval(timer);
    document.getElementById("stopBtn").setAttribute("disabled", "disabled");
    document.getElementById("startBtn").removeAttribute("disabled");
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    document.getElementById("stopBtn").setAttribute("disabled", "disabled");
    document.getElementById("startBtn").removeAttribute("disabled");
}

function updateStopwatch() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const display = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2,'0')}`;
    document.getElementById("display").innerText = display;
}
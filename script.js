// Cache DOM references once
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const headingEl = document.querySelector("h1");
const containerEl = document.querySelector(".container");

// Build initial target date
let currentYear = new Date().getFullYear();
//let newYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0);
let newYearDate = new Date(Date.now() + 60000); // 1 minute from now

// Update heading dynamically
headingEl.innerText = `New Year Countdown for ${currentYear + 1}!`;

function startCelebration() {
    headingEl.innerText = "HAPPY NEW YEAR!!";
    containerEl.classList.add("celebration");

    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";

    // After 1 hour, reset to next year
    setTimeout(() => {
        containerEl.classList.remove("celebration");

        currentYear++;
        newYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0);

        headingEl.innerText = `New Year Countdown for ${currentYear + 1}!`;
    }, 3600000); // 1 hour
}

function updateCountdown() {
    const now = new Date();
    const gap = newYearDate - now;

    if (gap <= 0) {
        startCelebration();
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    daysEl.innerText = d.toString().padStart(2, "0");
    hoursEl.innerText = h.toString().padStart(2, "0");
    minutesEl.innerText = m.toString().padStart(2, "0");
    secondsEl.innerText = s.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();

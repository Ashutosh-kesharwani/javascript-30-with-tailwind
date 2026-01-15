// Baseline offset to align CSS rotation (0deg = right) with clock top (12 o’clock)
const BASE_OFFSET = -90;


const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");


function setTime() {
    // Get the current date and time
    const now = new Date();


    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + BASE_OFFSET; // Convert sec into degrees

    // Rotate second hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    /* Minute Hand Rotation */

    const minutes = now.getMinutes();
    // This ensures gradual minute-hand movement
    const minutesDegrees =
        ((minutes + seconds / 60) / 60) * 360 + BASE_OFFSET;

    // Rotate minute hand
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


    /* Hour Hand Rotation */
    const hours = now.getHours();

    // Convert to 12-hour format and add minute contribution
    // This ensures gradual hour-hand movement
    const hoursDegrees =
        ((hours % 12 + minutes / 60) / 12) * 360 + BASE_OFFSET;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update the clock every second
setInterval(setTime, 1000);

// Initial call to display correct time immediately on page load
setTime();

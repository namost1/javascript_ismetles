document.addEventListener("DOMContentLoaded", function() {
    let currentHours = 14;
    let currentMinutes = 34;
    let currentSeconds = 42;

    let totalSecondsInDay = 24 * 60 * 60; 

    document.getElementById("calculateButton").addEventListener("click", function() {
        let elapsedSeconds = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;

        let remainingSeconds = totalSecondsInDay - elapsedSeconds;

        document.getElementById("remainingSeconds").textContent = remainingSeconds;
    });
});

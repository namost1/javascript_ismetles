document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkButton").addEventListener("click", function() {
        let year = parseInt(document.getElementById("year").value);
        let result;

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            result = 'Igen, ez egy szökőév.';
        } else {
            result = 'Nem, ez nem szökőév.';
        }

        document.getElementById("leapYearResult").textContent = result;
    });
});

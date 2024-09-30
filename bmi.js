document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", function() {
        let mass = parseFloat(document.getElementById("mass").value);
        let height = parseFloat(document.getElementById("height").value);

        let bmi = mass / (height * height);

        document.getElementById("bmiResult").textContent = bmi.toFixed(2);
    });
});

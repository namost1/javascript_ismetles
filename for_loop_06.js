document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", function() {
        let number = parseInt(document.getElementById("inputNumber").value);
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i; // Faktoriális számítása
        }

        document.getElementById("factorialResult").textContent = `${number} faktoriálisa ${factorial}.`;
    });
});

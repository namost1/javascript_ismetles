document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", function() {
        let number = document.getElementById("inputNumber").value;
        let sum = 0;
        let count = number.length;

        for (let i = 0; i < count; i++) {
            sum += parseInt(number[i]);
        }

        let average = sum / count;

        document.getElementById("averageResult").textContent = `A számjegyek átlaga: ${average}`;
    });
});

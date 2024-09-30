document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", function() {
        let output = "";
        let number = 10; 

        while (number <= 30) {
            let divisors = []; 
            let divisor = 1; 

            while (divisor <= number) {
                if (number % divisor === 0) {
                    divisors.push(divisor);
                }
                divisor++;
            }

            output += `${number}: ${divisors.join(", ")},\n`;
            number++; 
        }

        document.getElementById("divisorsOutput").textContent = output;
    });
});

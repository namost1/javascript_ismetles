document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", function() {
        let output = [];
        let skipCount = 0; 
        let currentSkip = 1; 
        let countDivBy3 = 0; 

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0) {
                countDivBy3++; 
                if (countDivBy3 === currentSkip) {
                    skipCount++;
                    currentSkip++;
                    continue; 
                }
            }
            output.push(i);
        }

        document.getElementById("numbersOutput").textContent = output.join(", ");
    });
});

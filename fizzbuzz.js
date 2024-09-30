document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", function() {
        let output = [];

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output.push("fizzbuzz"); 
            } else if (i % 3 === 0) {
                output.push("fizz"); 
            } else if (i % 5 === 0) {
                output.push("buzz"); 
            } else {
                output.push(i); 
            }
        }

        document.getElementById("fizzBuzzOutput").textContent = output.join(", ");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("drawButton").addEventListener("click", function() {
        let size = parseInt(document.getElementById("inputSize").value);
        let output = "";

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j || i + j === size - 1) {
                    output += "%"; 
                } else {
                    output += " "; 
                }
            }
            output += "\n";
        }

        document.getElementById("squareOutput").textContent = output;
    });
});

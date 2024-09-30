document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", function() {
        let inputString = document.getElementById("inputString").value;
        let lettersOutput = "";

        for (let i = 0; i < inputString.length; i++) {
            let char = inputString[i];

            if (!char.match(/[a-zA-Z]/)) {
                break; 
            }

            lettersOutput += char; 
        }

        document.getElementById("lettersOutput").textContent = lettersOutput || "-";
    });
});

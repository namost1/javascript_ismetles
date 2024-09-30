document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", function() {
        let inputString = document.getElementById("inputString").value;
        let output = "";

        for (let i = 0; i < inputString.length; i++) {
            output += inputString[i] + "\n"; // Minden betűt új sorba
        }

        document.getElementById("output").textContent = output;
    });
});

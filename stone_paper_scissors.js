document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkButton").addEventListener("click", function() {
        let player1 = document.getElementById("player1").value.toUpperCase();
        let player2 = document.getElementById("player2").value.toUpperCase();
        let result;

        if (player1 === player2) {
            result = "A játék döntetlen.";
        } else if (
            (player1 === "K" && player2 === "O") || 
            (player1 === "P" && player2 === "K") ||
            (player1 === "O" && player2 === "P") 
        ) {
            result = "Az első játékos nyer.";
        } else if (
            (player2 === "K" && player1 === "O") ||
            (player2 === "P" && player1 === "K") || 
            (player2 === "O" && player1 === "P") 
        ) {
            result = "A második játékos nyer.";
        } else {
            result = "Érvénytelen bemenet! Kérlek, használj K, P vagy O szimbólumokat.";
        }

        document.getElementById("gameResult").textContent = result;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", function() {
        let score = parseFloat(document.getElementById("score").value);
        let grade;

        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 60) {
            grade = 'D';
        } else if (score >= 0) {
            grade = 'F';
        } else {
            grade = 'Érvénytelen pontszám! Kérlek, adj meg egy 0 és 100 közötti értéket.';
        }

        document.getElementById("gradeResult").textContent = grade;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let a = 10.4;
    let b = 13.5;
    let c = 8.2;

    function calculateSurfaceArea(a, b, c) {
        return 2 * (a * b + b * c + a * c);
    }

    function calculateVolume(a, b, c) {
        return a * b * c;
    }

    document.getElementById("calculateButton").addEventListener("click", function() {
        console.log("Gombra kattintottál!");

        let surfaceArea = calculateSurfaceArea(a, b, c).toFixed(2);
        let volume = calculateVolume(a, b, c).toFixed(2);

        document.getElementById("surfaceArea").textContent = surfaceArea;
        document.getElementById("volume").textContent = volume;
    });
});

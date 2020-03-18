let xPosition;
let yPosition;
let distance;
// Får kordinaterne Musse klik
let GetCoordinates = function () {
    let canvas = document.getElementById('treasureCanvas');

    canvas.addEventListener("click", function (event) {
         xPosition = event.clientX;
         yPosition = event.clientY;
        document.getElementById("hej").innerHTML = "x = " + xPosition + "Y = " + yPosition;
    });
};
// Får afstanden fra musse klikket til Bubblen
let getDistance = function ( ) {
    let canvas = document.getElementById('treasureCanvas');
    canvas.addEventListener("click", function (event) {

        let diffX = bubble.x - xPosition;
        let diffY = bubble.y - yPosition;
        distance = Math.sqrt((diffX * diffX) + (diffY * diffY));
        document.getElementById("hej2").innerHTML = " distance" + distance;

        if (distance < 25) {
        return "Brændende!";
    } else if (distance < 45) {
        return "Meget varmt";
    } else if (distance < 70) {
        return "Varm";
    } else if (distance < 100) {
        return "Lunkent";
    } else if (distance < 160) {
        return "Kold";
    } else if (distance < 320) {
        return "Meget kold";
    } else {
        return "Frysende!";
    }

    });
};

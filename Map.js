// Står for at loade billedet ind
var GenerateMap = function () {
    var canvas = document.getElementById("treasureCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./map.png";

    img.onload = () => {
        ctx.drawImage(img,0,0)
    }
}


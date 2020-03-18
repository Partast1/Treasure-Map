class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
let bubble;
let setx;
let sety;
let setr;
// Opretter nyt bubble objekt
  let CreateBubble = function () {


       setx = Math.floor((Math.random() * 860) + 40);
       sety = Math.floor((Math.random() * 560) + 40);
        setr = 20;
       bubble = new Bubble(setx,sety,setr);



    }
    // Sætter bubble ind på canvas
let Draw = function () {
    CreateBubble();
    var canvas = document.getElementById("treasureCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
    ctx.stroke();

}




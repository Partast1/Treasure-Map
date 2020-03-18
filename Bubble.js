class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    CreateBubble(){
        let setx = 40;
        let sety = 40;
        let setr = 30;
        let b = new Bubble(x,y,r);
        var c=document.getElementById("treasureCanvas");
        var ctx=c.getContext("2d");
        ctx.createPattern();
        var getRandomNumber = function (size) {
            return Math.floor(Math.random() * size);
        };
    }
PlaceBubble(b){

    this.CreateBubble();

}

}
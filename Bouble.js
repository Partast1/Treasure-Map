
        var randomline=function(){


            //extension prompt,
            //insert var perclick into for loop
            //stop comparison
            //var perclick=prompt("how many //lines?");




            var c=document.getElementById("treasureCanvas");
            var ctx=c.getContext("2d");

            for(var i=0; i<=10; i++){

                ctx.moveTo( Math.floor((Math.random()*300)+1),
                    Math.floor((Math.random()*300)+1)
                );

                ctx.lineTo( Math.floor((Math.random()*700)+1), Math.floor((Math.random()*700)+1)
                );
                //if(Math.floor((Math.random()*6)+1)<3)  {
                // ctx.strokeStyle="#caff90";
                //    }else{
                //     ctx.strokeStyle="#caff10";
                //   }

                ctx.strokeStyle="#caff90";

                ctx.stroke();
            } //end of for loop.
        }; //end of randomline function.


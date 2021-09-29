class Game{
    constructor(){



    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){

            gameState = data.val();

        });


    }

    update(state){
        database.ref('/').update({

            gameState:state 

        });

    }

 async   start(){

        if(gameState == 0){

            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();

        }

        car1 = createSprite(100,200);
        car1.addImage("carImg",carImg);
        car2 = createSprite(300,200);
        car2.addImage("carImg2",carImg2);
        car3 = createSprite(500,200);
        car3.addImage("carImg3",carImg3);
        car4 = createSprite(700,200);
        car4.addImage("carImg4",carImg4);

        cars = [car1,car2,car3,car4]

    }

    play(){

        form.hide();
        textSize(20);
        text("EL JUEGO YA EMPEZÓ Y TIENES QUE AVANZAR PARA GANAR Y SI NO GANAS ME VAS A DERBER 1000000000000000000000$   :]",0,displayWidth/2);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(trackImg,0,-displayHeight*14,displayWidth,displayHeight*15);
            var index = 0;
            var x=175;
            var y;
            var display_position = 130;
            for(var prl in allPlayers){
                index = index+1
                x= x+200
                y=(displayHeight-allPlayers[prl].distance);
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index == player.index){
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                }
                
                //textSize(15);
                //text(allPlayers[prl].name+": "+allPlayers [prl].distance,120,display_position);

            }

        }

        if(keyIsDown(UP_ARROW)&& player.index !== null){

            player.distance +=50;
            player.update();

        }

        if(player.distance >30086){

            gameState = 2;
            player.rank +=1;
            Player.updateCarsAtEnd(player.rank);

        }

        drawSprites();
    }

    end(){

        console.log("El juego terminó jiji");
        console.log(player.rank);

    }

}
class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greetings = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');

    }


    hide(){

        this.title.hide();
        this.button.hide();
        this.greetings.hide();
        this.input.hide();








    }

    display(){


        this.title.html("TEST SUPER DIFICIL DE VIDA O MUERTE    :D");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greetings.html("HOLA "+player.name+" ojala PIERDAS XD");
            this.greetings.position(displayWidth/2-70,displayHeight/4);
            //gameState = 1;

        });

        this.reset.mousePressed(()=>{

            player.updateCount(0);
            game.update(0);
            player.updateCarsAtEnd(0);

        });

    }

}

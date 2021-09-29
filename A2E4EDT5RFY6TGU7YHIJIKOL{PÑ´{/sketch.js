var database;
var gameState = 0;
var playerCount;
var form;
var player
var game;
var canvas;
var bgImage;
var allPlayers;
var carImg,carImg2,carImg3,carImg4,trackImg;
var traky;
var car1, car2, car3, car4;
var cars;

function preload(){

    carImg = loadImage("car1.png");
    carImg2 = loadImage("car2.png");
    carImg3 = loadImage("car3.png");
    carImg4 = loadImage("car4.png");
    trackImg = loadImage("track.jpg");

}

function setup(){
    database = firebase.database();
    console.log(database);
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();



}

function draw(){
    background("white");
    
    if(playerCount==4){

        game.update(1);

    }

    if(gameState == 1){

        clear();
        game.play();

    }

}
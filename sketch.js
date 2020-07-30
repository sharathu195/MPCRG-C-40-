var canvas, BGimg;
var gameState = 0;
var database, playerCount;
var form, player, game;
var distance = 0;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, trackImg;

function preload(){
    trackImg = loadImage("images/track.jpg");
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
}

function setup(){
    canvas = createCanvas(displayWidth-30, displayHeight-150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        textSize(20);
        fill("white");
        //text(player.rank, displayWidth/2, displayHeight+100)
        game.end();
    }
}

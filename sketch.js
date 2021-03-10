var canvas;
var gameState = 0
var contenstantCount
var contenstant
var game
var form
var allcontenstantInfo
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(contenstantCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
}




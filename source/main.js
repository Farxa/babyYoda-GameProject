const game = new Game();
// variables (counters) for scrolling left and right
let scroll;
let isLeft;
let isRight;

function preload() {
    // game assets
    game.preload();
}

function setup() {
    createCanvas(900, 500);
    scroll = 0; //starting position for baby yoda
    isLeft = false;
    isRight = false;
    textSize(20);
    textAlign(CENTER);
    game.setup();
    

}

function draw() {
    game.draw();
    levelOne();
    // add health and life to the screen and connect them to baby yoda's score and life counter:
    text(("Score: " + game.babyYoda.score), width/12, 40);
    text(("Life: " + game.babyYoda.life), width/12, 60);
    translate(scroll, 0);

    if(isLeft){
        if(game.babyYoda.x > width * 0.1){
          
            game.babyYoda.x -= 5
        
        }else{
        
          scroll += 5
        }
      
      }
      
      if(isRight){
        if(game.babyYoda.x < width * 0.9){
          
            game.babyYoda.x += 5
        
        }else{
        
          scroll -= 5
        }
      
    }
}

function keyPressed() {
    if (keyCode === 38) {
        game.babyYoda.jump();
    }
    if (keyCode === 40) {
        game.babyYoda.y = game.babyYoda.y + 15;
       }

    if(keyCode === 37){
  
        isLeft = true;
      }
      if(keyCode === 39){
      
        isRight = true;
      }
}

function keyReleased() {
    if ( keyCode === 37) {
        isLeft = false;
    }
    if (keyCode === 39) {
        isRight = false;
    }
}

function levelOne () {
    text("Level 1", width/2, height-20);
}

//logic for scroll


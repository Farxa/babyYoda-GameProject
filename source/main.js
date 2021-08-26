const game = new Game();
// variables (counters) for scrolling left and right
let scroll;
let isLeft;
let isRight;

// add a timer
let Timer = 40;
let myFont;
let fontReady = false;


let playMode = true;

function preload() {
    myFont = loadFont('Assests/MajorMonoDisplay.ttf')
    // game assets
    game.preload();
}

function setup() {
    createCanvas(1000, 550);
    scroll = 0; //starting position for baby yoda
    isLeft = false;
    isRight = false;
    textFont('Impact');
    textAlign(CENTER);
    game.setup();
    
    if (game.stage == 0) {
        text('The BabyYoda Game')
    }
}

function draw() {
    game.draw();
    //levelOne();
    // add health and life to the screen and connect them to baby yoda's score and life counter:
    
    //translate(scroll, 0);

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
    if (frameCount % 60 == 0 && Timer > 0){
        Timer --;
    }
}

function keyPressed() {
    // if arrow up
    if (keyCode === 38) {
        game.babyYoda.goUp();
    }
    // if arrow down
    if (keyCode === 40) {
        game.babyYoda.goDown();
       }
       // if arrow left
    if(keyCode === 37){
  
        isLeft = true;
      }
      // if arrow right
      if(keyCode === 39){
      
        isRight = true;
      }

      // if enter is pressed(start game)
      if (keyCode === 13) {
          game.stage = 1;
      }
      // press spacebar to pause/unpause game
      if (keyCode === 32) {
          playMode = !playMode;
      }
}

function keyReleased() {
    if ( keyCode === 37) {
        isLeft = false;
    }
    if (keyCode === 39) {
        isRight = false;
    }
    if (keyCode === 40) {
        game.babyYoda.down = false;
    }
}

// function levelOne () {
//     text("Level 1", width / 2, height - 20);
// }

//logic for scroll


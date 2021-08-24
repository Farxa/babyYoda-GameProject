const game = new Game();

function preload() {
    // game assets
    game.preload();
}

function setup() {
    createCanvas(600, 500);
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
}

function keyPressed() {
    if (keyCode === 32) {
        game.babyYoda.jump();
    }
}

function levelOne () {
    text("Level 1", width/2, height-20);
}
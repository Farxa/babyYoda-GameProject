const game = new Game();

function preload() {
    // game assets
    game.preload();
}

function setup() {
    createCanvas(600, 500);
    game.setup();

}

function draw() {
    game.draw();
}
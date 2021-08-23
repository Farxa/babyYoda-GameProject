class Player {

    constructor() {
        this.width = 100;
        this.height = 120;
        this.x = 0;
        this.y = height - this.height;
    }


    draw() {
        console.log('drawing the player')
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
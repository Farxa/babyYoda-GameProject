class Player {

    constructor() {
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 90;
        this.height = 100;
        this.x = 0;
        this.y = height - this.height;
        this.score = 0;
        this.life = 100;
    }


    draw() {
        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
    }

    jump() {
        this.velocity = - 7;
    }
}
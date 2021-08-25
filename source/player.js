class Player {

    constructor() {
        this.gravity = 0.1;
        this.velocity =  0;
        this.width = 90;
        this.height = 100;
        this.x = 10;
        this.y = height - (this.height * 2); // why is baby yoda not floating?
        this.score = 0;
        this.lives = 6;
        this.down = false;
    }
   

    draw() {
        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.y = constrain(this.y, 0, (height - this.height))

        if (this.y > height - this.height * 2 && this.down === false) {
            this.y = height - (this.height * 2);
        }
        if (this.y < (this.height / 2) + 200) {
            this.down = false;
        }
    }

    goUp() {
        this.velocity = - 7;
    }
    goDown() {
        if (this.y === height - (this.height * 2)) {
            this.down = true;
            console.log(this.down)
        }
    }
}
class Player {

    constructor() {
        this.gravity = 0.1;
        this.velocity =  0;
        this.width = 90;
        this.height = 100;
        this.x = 10;
        this.y = height / 2; // why is baby yoda not floating?
        this.score = 0;
        this.life = 100;
    }
   

    draw() {
        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.y = constrain(this.y, 0, (height - this.height))

        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
    }

    jump() {
        this.velocity = - 7;
    }
    
}
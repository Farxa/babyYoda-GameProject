class Lasers {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height);
        this.width = 100;
        this.height = 10;
    }

    draw() {
        this.x --;
        image(this.image, this.x, this.y, this.width, this.height);

        this.x -= 20;
    }

    collision(childInfo) {
        let laserX = this.x + (this.width/2);
        let laserY = this.y + (this.height/2);

        let childX = childInfo.x + (childInfo.width/2);
        let childY = childInfo.y + (childInfo.height/2);

        if (game.babyYoda.life === 0) {
            console.log('Game Over!')
            noLoop();
        }
        if (dist(laserX, laserY, childX, childY) > 50) {
            return false; 
        } else {
			game.babyYoda.life -= 10;
            return true;
        }
    }
}
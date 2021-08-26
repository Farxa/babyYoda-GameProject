class Lasers {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height * 2);
        this.width = 100;
        this.height = 10;
    }

    draw() {
        this.x --;
        image(this.image, this.x, this.y, this.width, this.height);
        this.y = constrain(this.y, 40, (height - this.height));
        this.x -= 18;
    }

    collision(childInfo) {
        let laserX = this.x + (this.width/2);
        let laserY = this.y + (this.height/2);

        let childX = childInfo.x + (childInfo.width/2);
        let childY = childInfo.y + (childInfo.height/2);

        if (game.babyYoda.life === 0) {
            game.stage = 3;
            
        }
        if (Timer === 0 && game.babyYoda.life > 0) {
            game.stage = 2;

        }
        if (dist(laserX, laserY, childX, childY) > 50) {
            return false; 
        } else {
			game.babyYoda.life -= 1;
            game.laserSound.play();
            return true;
        }
    }
}
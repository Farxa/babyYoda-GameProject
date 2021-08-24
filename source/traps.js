class Traps {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = height - height / 9;
        this.width = 100;
        this.height = 80;
    }

    draw() {
        this.x --;
        image(this.image, this.x, this.y, this.width, this.height);
    }

    collision(childInfo) {
        let trapX = this.x + (this.width/2);
        let trapY = this.y + (this.height/2);

        let childX = childInfo.x + (childInfo.width/2);
        let childY = childInfo.y + (childInfo.height/2);

        if (dist(trapX, trapY, childX, childY) > 100) {
            return false; 
        } else {
			game.babyYoda.life -= 10;
            return true;
        }
    }
}
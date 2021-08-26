class Treat {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height + 50);
        this.width = 30;
        this.height = 30;
    }
    draw() {
        this.x --;
        image(this.image, this.x, this.y, this.width, this.height);
        this.y = constrain(this.y, 50, (height - this.height));
    }

    collision(childInfo) {
        let treatX = this.x + (this.width/2);
        let treatY = this.y + (this.height/2);

        let childX = childInfo.x + (childInfo.width/2);
        let childY = childInfo.y + (childInfo.height/2);

        if (dist(treatX, treatY, childX, childY) > 60) {
            return false; 
        } else {
			game.babyYoda.score += 10;
            game.eatingSound.play();
            return true;
        }
    }
}
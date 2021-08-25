class Game {
    constructor() {
        this.treats = [];
        this.backgroundImages = [];
        this.lasers = [];
    }

    setup() {
        this.background = new Background;
        this.babyYoda = new Player;
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('Assests/Background/Parallax/01_Sky.png'), x: 0, speed: 0 },
            { src: loadImage('Assests/Background/Parallax/02_Stars.png'), x: 0, speed: 1 },
            { src: loadImage('Assests/Background/Parallax/03_Moon.png'), x: 0, speed: 0 },
            { src: loadImage('Assests/Background/Parallax/04_Cloud.png'), x: 0, speed: 1 },
            { src: loadImage('Assests/Background/Parallax/05_Cloud.png'), x: 0, speed: 2 },
            { src: loadImage('Assests/Background/Parallax/06_Cloud.png'), x: 0, speed: 2},
            { src: loadImage('Assests/Background/Parallax/07_Cloud.png'), x: 0, speed: 3 },
            { src: loadImage('Assests/Background/Parallax/08_Cloud.png'), x: 0, speed: 3 },
            { src: loadImage('Assests/Background/Parallax/09_Cloudsmall.png'), x: 0, speed: 3 },
            { src: loadImage('Assests/Background/Parallax/10_Cloudsmall.png'), x: 0, speed: 4 },
            { src: loadImage('Assests/Background/Parallax/11_Mountains.png'), x: 0, speed: 4 },
            { src: loadImage('Assests/Background/Parallax/12_Desert.png'), x: 0, speed: 4 }
        ];
        this.playerImage = loadImage('Assests/baby-yoda.gif');
        this.macaroonImage = loadImage('Assests/pixel-art-macaroons-hd-png.png');
        this.laserImage = loadImage('Assests/Lasers/laser.gif')
    }

    draw() {
        // draw all the objects the game needs(background, babyYoda, treats, obstacles, enemies, laser, pod)
        clear();
        this.background.draw();
        this.babyYoda.draw();
        // make treats and lasers appear
        if (frameCount % 170 === 0) {
            this.treats.push(new Treat(this.macaroonImage));
        }

        if (frameCount % 150 === 0) {
            this.lasers.push(new Lasers(this.laserImage));
        }

        //draw the treats
        this.treats.forEach((macaroon) => {
            macaroon.draw();
        })

        // draw the lasers
        this.lasers.forEach((laser) => {
            laser.draw();
        })

        // if baby yoda catches the macaroons || if the macaroons leave the canvas, remove them.
        this.treats = this.treats.filter((macaroon) => {
            if (macaroon.collision(this.babyYoda) || (macaroon.x + macaroon.width) < 0) {
                return false;
            } else {
                return true;
            }
        })

        //if baby yoda gets hit by laser, 
        this.lasers = this.lasers.filter((laser) => {
            if (laser.collision(this.babyYoda)) {
                return false;
            } else {
                return true;
            }
        })
    }
}
class Game {
    constructor() {
        this.treats = [];
        this.backgroundImages = [];
        this.lasers = [];
        this.losingScreen;
        this.winningScreen;
        this.laserSound;
        this.eatingSound;
        this.backgroundMusic;
        this.stage = 0;
        this.startingScreen;
    }

    setup() {
        this.background = new Background;
        this.babyYoda = new Player;
        this.backgroundMusic.loop();
    }

    preload() {
        this.laserSound = loadSound('Assests/sounds/laser.wav');
        this.eatingSound = loadSound('Assests/sounds/chomp.mp3');
        this.backgroundMusic = loadSound('Assests/sounds/background music.mp3');
        this.losingScreen = loadImage('Assests/youLose.gif');
        this.winningScreen = loadImage('Assests/happyBabyYoda.gif')
        this.startingScreen = loadImage('Assests/startscreen.gif')
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
        this.gamePlay();
        // stages and screens

        if (this.stage == 0) {
            this.startScreen();
        } 

        if (this.stage == 1) {
            this.gamePlay();
        }
    
        if (this.stage === 2) {
            this.winScreen(); 
        }
    
        if (this.stage === 3) {
            this.loseScreen();
        } 
    }

    gamePlay() {
        if (playMode) {
            this.background.draw();
            this.babyYoda.draw();
            //status bar
	        fill(240,239,242, 70);
            stroke(240,239,242, 50);
	        rect(0, 0, width, 50);
	        //scoreboard
            textFont('Impact');
            fill(33,90,126)
	        textSize(20);
	        text('Score:', 50, 20);
	        textSize(20);
	        text(game.babyYoda.score, 90, 20);
	        //life
	        textSize(20);
	        text('Life:', 50, 45);
	        textSize(20);
	        text(game.babyYoda.life, 90, 45);
	        //Timer
	        textSize(20);
	        text('Time:', 920, 35);
	        textSize(20);
	        text(Timer, 960, 35);
            // name of the game
            textFont(myFont);
            textSize(60);
            text('BabyYoda', 450, 50);
        // make treats and lasers appear
            if (frameCount % 110 === 0) {
            this.treats.push(new Treat(this.macaroonImage));
        }

            if (frameCount % 180 === 0) {
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
        } else {
            fill(0,127,140);
            stroke(0,127,140);
            text('Paused!', 500, height - 300);
            textFont('Impact');
            fill(240,239,242, 70);
            stroke(240,239,242);
            rect(250, 100, width/2, height/2);
        }
        
    }
    startScreen() {
        this.background.draw();
        this.stage = 0;
        image(this.startingScreen, 200, 70, 600, 400)

    }

    winScreen() {
        this.background.draw();
        image(this.winningScreen, 250, 100, width/2, height/2);
        fill('white');
        text('You Win!', 500, height - 80);
        this.backgroundMusic.stop();
        this.eatingSound.stop();
        this.laserSound.stop();
    }

    loseScreen() {
        //noLoop();
        this.background.draw();
        image(this.losingScreen, 250, 100, width/2, height/2);
        fill('white');
        text('You killed Baby Yoda!', 500, height - 80);
        this.backgroundMusic.stop();
        this.eatingSound.stop();
        this.laserSound.stop();
    }
}
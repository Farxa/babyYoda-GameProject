class Game {
    constructor() {
        
    }

    setup() {
        this.background = new Background;
        this.player = new Player;
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/01_Sky.png'), x: 0, speed: 0 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/02_Stars.png'), x: 0, speed: 1 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/03_Moon.png'), x: 0, speed: 0 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/04_Cloud.png'), x: 0, speed: 1 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/05_Cloud.png'), x: 0, speed: 1 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/06_Cloud.png'), x: 0, speed: 1},
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/07_Cloud.png'), x: 0, speed: 1 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/08_Cloud.png'), x: 0, speed: 4 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/09_Cloudsmall.png'), x: 0, speed: 5 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/10_Cloudsmall.png'), x: 0, speed: 6 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/11_Mountains.png'), x: 0, speed: 4 },
            { src: loadImage('../Assests/Background/Parallax Desert Background (Seamless)/12_Desert.png'), x: 0, speed: 6 }
        ];
        this.playerImage = loadImage('../Assests/baby-yoda.gif')
    }

    draw() {
        // draw all the objects the game needs(background, player, treat, obstacle)
        clear();
        this.background.draw();
        this.player.draw();

    }
}
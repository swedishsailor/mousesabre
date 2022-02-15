"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
var background = new Image();
background.src = constants_1.BACKGROUND;
var healthLeft = 5;
// Helpers variables
var correctPositionX = 0;
var correctPositionY = 0;
var interval = 0;
var previousPlayerX, previousPlayerY;
var enemies = [];
var trailsArray = new Array;
var trailImg = 'https://i.postimg.cc/NMQXwzGF/blue-Trail8.png';
var trailPosX, trailPosY, trailWidth, trailHeight;
var trailLeftBehind = new Image();
trailLeftBehind.src = 'https://i.postimg.cc/C1KJC87K/TEST20-X20circle.png';
var spawnRateStages = [
    384,
    192,
    96,
    48,
    24,
    12,
    6,
    3 // 128 enemies on screen
];
var spawnRate = 1;
// Create a data instance for our player
var playerCursor = {
    img: new Image(),
    width: 40,
    height: 40,
    // x and y basic state is -100 to not render image on canvas
    x: -100,
    y: -100
};
playerCursor.img.src = constants_1.PLAYER.imgEast;
/**
 * Functions
 */
var nextFrameBegin = function () {
    ctx.drawImage(background, 0, 0, canvas.clientWidth, canvas.clientHeight);
};
var AiMoveAway = function (player, creature, speed) {
    if (player.x > creature.x && Math.abs(player.x - creature.x) < 90 && creature.x < window.innerWidth - 60 && creature.x > 0) {
        creature.x -= speed;
    }
    else if (player.x < creature.x && Math.abs(player.x - creature.x) < 90 && creature.x < window.innerWidth - 60 && creature.x > 0) {
        creature.x += speed;
    }
};
var AiCirlce = function (creature) {
    //
    setTimeout(function () {
        creature.x = 170 * Math.sin(interval / 100);
        creature.y = 170 * Math.cos(interval / 100);
    }, 500);
};
var AiClone = function (creature) {
    // 60% chance every sec to spawn copy
    if (Math.floor(Math.random() * 200) === 1) {
        var clone = Object.create(creature);
        // Randomly spawn copies on the random x axis positions of clone parent
        if (Math.round(Math.random() + 1) === 2 && creature.x < window.innerWidth - 90) {
            clone.x += Math.round(Math.random() * 30) + 25;
            enemies.push(clone);
        }
        else if (Math.round(Math.random() + 1) === 1 && creature.x > 90) {
            clone.x -= Math.round(Math.random() * 30) + 25;
            enemies.push(clone);
        }
    }
};
var AiTeleport = function (player, creature) {
    if (player.x > creature.x && Math.abs(player.x - creature.x) < 50 && creature.x < window.innerWidth - 60 && creature.x > 0 ||
        player.x < creature.x && Math.abs(player.x - creature.x) < 50 && creature.x < window.innerWidth - 60 && creature.x > 0) {
        var randomRange = Math.round(Math.random() * 400) - 200;
        creature.x += randomRange;
        var animate_1 = setInterval(function () {
            drawAnim(creature.x - 10, creature.y - 10, 128, 128, constants_1.AITELEPORTIMG, 8);
        }, 1000 / 120);
        setTimeout(function () {
            clearInterval(animate_1);
        }, 450);
    }
};
var AiRushDown = function (creature, speed) {
    drawAnim(creature.x, creature.y - 160, 128, 256, 'https://i.postimg.cc/pXVV7Hhy/rushdown.png', 4);
    setTimeout(function () {
        creature.y += speed;
    }, 1500);
};
var drawAnim = function (x, y, width, height, src, framesNumber) {
    var image = new Image();
    image.src = src;
    var thisFrame = Math.round(interval % (framesNumber * 10) / 10);
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
};
var startGame = function () {
    document.body.classList.add('hideCursor');
};
var gameOver = function () {
    clearInterval(gameRender);
    document.body.classList.remove('hideCursor');
};
/**
 * Canvas Rendering
 */
var gameRender = setInterval(function () {
    nextFrameBegin();
    if (healthLeft < 1) {
        gameOver();
    }
    // Interface player health info
    ctx.fillStyle = '#b71540';
    ctx.font = 'normal small-caps bold 48px serif';
    drawAnim(50, 50, 64, 64, constants_1.HPIMG, 5);
    ctx.fillText(" x" + healthLeft, 50 + 64, 50 + 48);
    // Setup animations on every position change
    onmousemove = function (e) {
        if (e.clientX < previousPlayerX && e.clientY != previousPlayerY) {
            playerCursor.img.src = constants_1.PLAYER.imgWest;
            trailImg = 'https://i.postimg.cc/GmCTYmVV/blue-Trail-Left.png';
            trailPosX = -38.5;
            trailPosY = 30;
            trailWidth = 85;
            trailHeight = 20;
            correctPositionX = 20;
            correctPositionY = 0;
        }
        else if (e.clientX > previousPlayerX && e.clientY != previousPlayerY) {
            playerCursor.img.src = constants_1.PLAYER.imgEast;
            trailImg = 'https://i.postimg.cc/QdJ9qrrt/blue-Trail-Right.png';
            trailPosX = 100.5;
            trailPosY = 30;
            trailWidth = 85;
            trailHeight = 20;
            correctPositionX = 40;
            correctPositionY = 0;
        }
        else if (e.clientY != previousPlayerY) {
            playerCursor.img.src = constants_1.PLAYER.imgNorth;
            trailImg = 'https://i.postimg.cc/NMQXwzGF/blue-Trail8.png';
            trailPosX = -16;
            trailPosY = 50;
            trailWidth = 20;
            trailHeight = 53;
            correctPositionX = 0;
            correctPositionY = 20;
        }
        // Update player position info
        playerCursor.x = e.clientX;
        playerCursor.y = e.clientY;
        // Saving previous mouse pos for above position checking
        previousPlayerX = e.clientX;
        previousPlayerY = e.clientY;
    };
    interval++;
    // Set enemies spawn speed by a certain amount of time
    if (interval / 1000 > 0) {
        spawnRate = spawnRateStages[1];
    }
    else if (interval / 1000 > 2) {
        spawnRate = spawnRateStages[2];
    }
    else if (interval / 1000 > 4) {
        spawnRate = spawnRateStages[3];
    }
    else if (interval / 1000 > 6) {
        spawnRate = spawnRateStages[6];
    }
    if (interval % spawnRate === 3) {
        // Defining every enemy of this type
        var enemyLv1 = {
            img: new Image(),
            width: constants_1.ENEMYLV1.width,
            height: constants_1.ENEMYLV1.height,
            x: Math.floor((Math.random() * window.innerWidth + 50) - 25),
            y: constants_1.ENEMYLV1.y,
            speed: constants_1.ENEMYLV1.speed,
            radius: constants_1.ENEMYLV1.radius,
            mutation: Math.floor(Math.random() * 4) + 1
        };
        enemyLv1.img.src = constants_1.ENEMYLV1.img;
        enemies.push(enemyLv1);
    }
    enemies.forEach(function (element) {
        // Apply logic to enemy
        switch (element.mutation) {
            case 1:
                AiMoveAway(playerCursor, element, 5);
                break;
            case 2:
                AiClone(element);
                break;
            case 3:
                AiTeleport(playerCursor, element);
                break;
            case 4:
                AiRushDown(element, 20);
                break;
        }
        ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        element.y += element.speed;
        // Enemy arrived to it's destination
        if (element.y >= window.innerHeight) {
            var index = enemies.indexOf(element);
            enemies.splice(index, 1);
            healthLeft--;
        }
        // If enemy collides with cursor
        if ((0, utils_1.collision)(playerCursor, element) <= element.radius / 2) {
            var index = enemies.indexOf(element);
            enemies.splice(index, 1);
        }
        ;
    });
    /**
     * Sword trail
     */
    var trail = {
        img: new Image(),
        x: playerCursor.x,
        y: playerCursor.y,
        width: constants_1.TRAIL.width,
        height: constants_1.TRAIL.height
    };
    trail.img.src = constants_1.TRAIL.img;
    trailsArray.push(trail);
    trailsArray.forEach(function (element) {
        //drawAnim(element.x - trailPosX, element.y - trailPosY, trailWidth, trailHeight, trailImg, 7);
        var getPosX = element.x - trailPosX;
        var getPosY = element.y - trailPosY;
        ctx.drawImage(trailLeftBehind, getPosX + correctPositionX, getPosY + correctPositionY, 20, 20);
    });
    if (interval % 23 === 1 || interval % 23 === 2) {
        trailsArray.forEach(function (element) {
            var index = trailsArray.indexOf(element);
            trailsArray.splice(index, 1);
        });
    }
    // Drawn anim on top of the sword
    drawAnim(trail.x - trailPosX, trail.y - trailPosY, trailWidth, trailHeight, trailImg, 7);
    // Drawing player
    ctx.drawImage(playerCursor.img, playerCursor.x - playerCursor.width / 2, playerCursor.y - playerCursor.height / 2);
}, 1000 / 120);
startGame();

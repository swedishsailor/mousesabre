import { BACKGROUND, BACKGROUND_SLOWMOTION, ENEMYLV1, ENEMY_AI_RUSHDOWN, ENEMY_AI_TELEPORT, HPIMG, PLAYER, TAILS_BOTTOM, TAILS_SIDE, TRAIL } from "./constants";
import { collision, createGrid } from "./utils";
interface Cursor {
    img: HTMLImageElement;
    readonly width: number;
    readonly height: number;
    x?: number;
    y?: number;
}
interface Enemy {
    img: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;
    radius: number;
    mutation?: number;
}
interface Trail {
    img?: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
}
type Positions = {
    x: number,
    y: number,
}
// VERY IMPORTANT VARIABLES
let canvas: any;
let ctx: CanvasRenderingContext2D;
let healthLeft: number = 55555;
let grid: Array<[]> = [];
const enemies: Array<Object> = [];
const trailsArray = new Array;
const MAIN_URL: string = location.href;
let isSlowMotion: boolean = false;
// IMAGES AND IMAGES SRC
const background: HTMLImageElement = new Image();
const sideTile: HTMLImageElement = new Image();
sideTile.src = TAILS_SIDE;
const bottomTile: HTMLImageElement = new Image();
bottomTile.src = TAILS_BOTTOM;
const backgroundTile: HTMLImageElement = new Image();
backgroundTile.src = 'https://i.postimg.cc/VNpQPw38/bckg.png';
let trailImg: string = 'https://i.postimg.cc/NMQXwzGF/blue-Trail8.png';
let trailPosX: number, trailPosY: number, trailWidth: number, trailHeight: number;
const trailLeftBehind: HTMLImageElement = new Image();
trailLeftBehind.src = 'https://i.postimg.cc/C1KJC87K/TEST20-X20circle.png';
// HELPERS VARIABLES
let interval: number = 0;
let previousPlayerX: number, previousPlayerY: number;
let samuraiSkillPosArr: [] = [];
const spawnRateStages: Array<number> = [
    384, // 1 enemies on screen
    192, // 2 enemies on screen
    96, // 4 enemies on screen
    48, // 8 enemies on screen
    24, // 16 enemies on screen
    12, // 32 enemies on screen
    6, // 64 enemies on screen
    3 // 128 enemies on screen
]
let spawnRate: number = 1;
// Create a data instance for our player
const playerCursor: Cursor = {
    img: new Image(),
    width: 40,
    height: 40,
    // x and y basic state is -100 to not render image on canvas at the game start
    x: -100,
    y: -100,
}
playerCursor.img.src = PLAYER.imgEast;

/*****************************************************
 Functions
 *****************************************************/
const nextFrameBegin = (): void => {
    ctx.drawImage(background, 0, 0, canvas.clientWidth, canvas.clientHeight);
}

const Ai_MoveAway = (player: Cursor, creature: Enemy, speed: number): void => {
    if (!isSlowMotion) {
        if (player.x > creature.x && Math.abs(player.x - creature.x) < 90 && creature.x < window.innerWidth - 60 && creature.x > 0) {
            creature.x -= speed;
        } else if (player.x < creature.x && Math.abs(player.x - creature.x) < 90 && creature.x < window.innerWidth - 60 && creature.x > 0) {
            creature.x += speed;
        }
    }
}
const AiCirlce = (creature: Enemy): void => {
    //
    setTimeout(() => {
        creature.x = 170 * Math.sin(interval / 100)
        creature.y = 170 * Math.cos(interval / 100)
    }, 500);
}
const Ai_Clone = (creature: Enemy): void => {
    // 60% chance every sec to spawn copy
    if (Math.floor(Math.random() * 50) === 1) {
        let clone: Enemy = Object.create(creature)
        // Randomly spawn copies on the random x axis positions of clone parent
        if (Math.round(Math.random() + 1) === 2 && creature.x < window.innerWidth - 90) {
            clone.x += Math.round(Math.random() * 30) + 25;
            enemies.push(clone);
        } else if (Math.round(Math.random() + 1) === 1 && creature.x > 90) {
            clone.x -= Math.round(Math.random() * 30) + 25;
            enemies.push(clone);
        }
    }
}
const Ai_Teleport = (player: Cursor, creature: Enemy): void => {
    if (!isSlowMotion) {
        if (player.x > creature.x && Math.abs(player.x - creature.x) < 50 && creature.x < window.innerWidth - 60 && creature.x > 0 ||
            player.x < creature.x && Math.abs(player.x - creature.x) < 50 && creature.x < window.innerWidth - 60 && creature.x > 0) {
            const randomRange: number = Math.round(Math.random() * 400) - 200;
            creature.x += randomRange;
            const animate: NodeJS.Timer = setInterval(() => {
                drawAnim(creature.x - 10, creature.y - 10, 128, 128, ENEMY_AI_TELEPORT, 8)
            }, 1000 / 120)
            setTimeout(() => {
                clearInterval(animate);
            }, 450);
        }
    }
}
const Ai_RushDown = (creature: Enemy, speed: number): void => {
    drawAnim(creature.x, creature.y - 160, 128, 256, ENEMY_AI_RUSHDOWN, 4)
    const argSpeedValue: number = speed;
    setTimeout(() => {
        if (isSlowMotion) {
            speed = 0.5;
        } else {
            speed = argSpeedValue;
        }
        creature.y += speed;
    }, 1500);
}
const drawAnim = (x: number, y: number, width: number, height: number, src: string, framesNumber: number): void => {
    let image: HTMLImageElement = new Image();
    image.src = src;
    const thisFrame: number = Math.round(interval % (framesNumber * 10) / 10)
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
}
export const startGame = (): void => {
    document.body.classList.add('hideCursor');
}
const gameOver = (): void => {
    clearInterval(gameRender);
    document.body.classList.remove('hideCursor');
    document.body.innerHTML = '';
    const gameOverTag: HTMLElement = document.createElement('h1');
    gameOverTag.textContent = 'GAME OVER';
    gameOverTag.classList.add('gameOverText');
    canvas.style = 'display:none;'
    document.body.appendChild(gameOverTag);
    const menuButton: HTMLButtonElement = document.createElement('button');
    menuButton.textContent = 'Main Menu';
    menuButton.classList.add('menuButton');
    document.body.appendChild(menuButton);
    // On button click reload page to the first locationUrl (to the main menu)
    menuButton.addEventListener('click', (): void => {
        location.href = MAIN_URL;
    })
}
export const initGameState = (): void => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // Make gamelook a bitsmaller on screen width > 1600
    // -> for later window.innerWidth > 1600 ? canvas.width = window.innerWidth - 255: canvas.width = window.innerWidth - 5;
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;
    background.src = BACKGROUND;

    // Attach right mouse click skill
    canvas.addEventListener('contextmenu', (e: MouseEvent): void => {
        playerSkill_SamuraiSlash();
        // This is on last position because we don't want browser option menu to pop up and if preventDefault() is on the beggining of func -> it doesn't work then
        e.preventDefault();
    })
}

const playerSkill_SamuraiSlash = (): void => {
    slowMotionMode(3.5);
    const skillHitbox: NodeJS.Timer = setInterval((): void => {
        ctx.beginPath();
        ctx.lineWidth = 12;
        samuraiSkillPosArr.forEach((element: Positions) => {
            ctx.lineTo(element.x, element.y);

        })
        ctx.stroke();
    }, 1000 / 60)
    setTimeout(() => {
        // Clean info about previous SamuraiSlash positions
        samuraiSkillPosArr = [];
        clearInterval(skillHitbox);
    }, 4500);
}

const slowMotionMode = (seconds: number): void => {
    isSlowMotion = true;
    clearInterval(gameRender);
    gameRender = setInterval(gameRendering, 1000 / 12)
    background.src = BACKGROUND_SLOWMOTION;

    setTimeout((): void => {
        isSlowMotion = false;
        clearInterval(gameRender)
        background.src = BACKGROUND;
        gameRender = setInterval(gameRendering, 1000 / 60)
    }, seconds * 1000);
}
const paintGrid = (sqmSize: number): void => {
    grid.forEach((element: [], index: number): void => {
        element.forEach((elem: object, id: number): void => {
            // Below comments checks if every squaremeter got correct position
            //ctx.rect(sqmSize*id, sqmSize * index, sqmSize, sqmSize)
            //ctx.stroke()    
            // Make barriers on left and right
            if (id === 0 || id === element.length - 1) {
                ctx.drawImage(sideTile, sqmSize * id, sqmSize * index)
            }
            else if (index === grid.length - 2) {
                ctx.drawImage(bottomTile, sqmSize * id, sqmSize * index)
            } else {
                //ctx.drawImage(backgroundTile, sqmSize * id, sqmSize * index)
            }
        })
    })
}
const createSwordTrailTick = (element: Trail, tick: number): void => {
    ctx.lineTo(element.x, element.y - 25);
    ctx.lineTo(element.x + (Math.random() * 40 - 20), element.y - 25 - (Math.random() * 40 - 20))
    tick !== 0 ? createSwordTrailTick(element, tick - 1) : null;
}
/*****************************************************
CANVAS RENDERING
 *****************************************************/
const gameRendering = (): void => {
    nextFrameBegin();
    paintGrid(32);
    if (healthLeft < 1) {
        gameOver();
    }
    // Interface player health info
    ctx.fillStyle = '#b71540';
    ctx.font = 'normal small-caps bold 48px rakkas';
    drawAnim(50, 50, 64, 64, HPIMG, 5)
    ctx.fillText(` x ${healthLeft}`, 50 + 64, 50 + 48);

    // Setup animations on every position change
    onmousemove = (e: MouseEvent): void => {
        if (e.clientX < previousPlayerX && e.clientY != previousPlayerY) {
            playerCursor.img.src = PLAYER.imgWest;
            trailImg = 'https://i.postimg.cc/GmCTYmVV/blue-Trail-Left.png';
            trailPosX = -38.5;
            trailPosY = 30;
            trailWidth = 85;
            trailHeight = 20;
        } else if (e.clientX > previousPlayerX && e.clientY != previousPlayerY) {
            playerCursor.img.src = PLAYER.imgEast;
            trailImg = 'https://i.postimg.cc/QdJ9qrrt/blue-Trail-Right.png';
            trailPosX = 100.5;
            trailPosY = 30;
            trailWidth = 85;
            trailHeight = 20;
        } else if (e.clientY != previousPlayerY) {
            playerCursor.img.src = PLAYER.imgNorth;
            trailImg = 'https://i.postimg.cc/NMQXwzGF/blue-Trail8.png';
            trailPosX = -16;
            trailPosY = 50;
            trailWidth = 20;
            trailHeight = 53;
        }
        // Update player position info
        playerCursor.x = e.clientX;
        playerCursor.y = e.clientY;
        // Saving previous mouse pos for above position checking
        previousPlayerX = e.clientX;
        previousPlayerY = e.clientY;

        trailsArray.push(trail);
        if (isSlowMotion) {
            const playerSlowMotionPos: Positions = {
                x: e.clientX,
                y: e.clientY
            }
            samuraiSkillPosArr.push(playerSlowMotionPos);
        }
    }
    interval++;
    // Set enemies spawn speed by a certain amount of time
    if (interval / 1000 > 0) {
        spawnRate = spawnRateStages[4];
    } else if (interval / 1000 > 2) {
        spawnRate = spawnRateStages[2];
    } else if (interval / 1000 > 4) {
        spawnRate = spawnRateStages[3];
    } else if (interval / 1000 > 6) {
        spawnRate = spawnRateStages[6];
    }
    if (interval % spawnRate === 3) {
        // Defining every enemy of this type
        const enemyLv1: Enemy = {
            img: new Image(),
            width: ENEMYLV1.width,
            height: ENEMYLV1.height,
            x: Math.floor((Math.random() * window.innerWidth + 50) - 25), // -n +n makes enemies don't appear outside or semi outside of screen
            y: ENEMYLV1.y,
            speed: ENEMYLV1.speed,
            radius: ENEMYLV1.radius,
            mutation: Math.floor(Math.random() * 4) + 1,
        }
        enemyLv1.img.src = ENEMYLV1.img;
        enemies.push(enemyLv1);
    }
    enemies.forEach((element: Enemy) => {
        // Apply logic to enemy
        switch (element.mutation) {
            case 1: Ai_MoveAway(playerCursor, element, 5);
                break;
            case 2: Ai_Clone(element);
                break;
            case 3: Ai_Teleport(playerCursor, element);
                break;
            case 4: Ai_RushDown(element, 20);
                break;
        }
        ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        element.y += element.speed;
        // Enemy arrived to it's destination
        if (element.y >= window.innerHeight) {
            const index: number = enemies.indexOf(element);
            enemies.splice(index, 1);
            // Don't count enemies who are out screen
            if (element.x > 0 && element.x < window.innerWidth)
                healthLeft--;
        }
        // If enemy collides with cursor
        if (collision(playerCursor, element) <= element.radius / 2 && !isSlowMotion) {
            const index: number = enemies.indexOf(element);
            enemies.splice(index, 1);
        }

        samuraiSkillPosArr.forEach((slashPos: Positions) => {
            if (collision(slashPos, element) < 5 && !isSlowMotion) {
                const index: number = enemies.indexOf(element);
                enemies.splice(index, 1);
            }
        });
    });


    /**
     * Sword trail
     */
    const trail: Trail = {
        x: playerCursor.x,
        y: playerCursor.y,
        width: TRAIL.width,
        height: TRAIL.height,
    }
    trailsArray.forEach((element: Trail) => {
        if (!isSlowMotion) {
            ctx.beginPath();
            // Getting random color to make trail looking more precious
            switch (Math.floor(Math.random() * 4 + 1)) {
                case 1: ctx.strokeStyle = '#2ce8f5';
                    break;
                case 2: ctx.strokeStyle = '#0099db';
                    break;
                case 3: ctx.strokeStyle = '#fff';
                    break;
                case 4: ctx.strokeStyle = '#7b2cf5';
            }
            ctx.lineWidth = 3;
            createSwordTrailTick(element, 12);
            ctx.stroke();
        }
    })
    trailsArray.forEach((element: Trail) => {

        if (collision(playerCursor, element) > 220) {
            const index: number = trailsArray.indexOf(element);
            trailsArray.splice(index, 1);
        }
        if (interval % 12 === 1) {
            const index: number = trailsArray.indexOf(element);
            trailsArray.splice(index, 1);
        }
    })
    // Drawn anim on top of the sword + prevent to render anim on slowMotion
    !isSlowMotion ? drawAnim(trail.x - trailPosX, trail.y - trailPosY, trailWidth, trailHeight, trailImg, 7) : null;

    // Drawing player
    ctx.drawImage(playerCursor.img, playerCursor.x - playerCursor.width / 2, playerCursor.y - playerCursor.height / 2);
}
let gameRender: NodeJS.Timer = setInterval(() => {
    gameRendering();
}, 1000 / 60);
createGrid(32, grid);
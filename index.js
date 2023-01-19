const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 64 * 16; //1024;
canvas.height = 64 * 9; //576;

//$('#start').click(function () { alert('hi'); });

//use the parse2D() method to Orgnize collisionsLevel1 and put the new array in parsedCollesions
let parsedCollesions;
let collisionBlocks;
let background;
let doors;
let level = 1;

//when create player send object with property collisionBlocks and put the above collisionBlocks array in it
let player;

let levels = {
  1: {
    init: () => {
      $(canvas).fadeIn(2000);
      player = new Player({
        imageSrc: "./img/king/idle.png",
        frameRate: 11,
        animations: {
          idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idle.png",
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idleLeft.png",
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runLeft.png",
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runRight.png",
          },
          enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: "./img/king/enterDoor.png",
            oncomplete: () => {
              level++;
              $(canvas).fadeOut(2000, () => {
                console.log(level in levels);
                if (level in levels) {
                  levels[level].init();
                } else {
                  $("#p").fadeIn(2000);
                }
              });

              console.log(level);
            },
          },
        },
      });
      //use the parse2D() method to Orgnize collisionsLevel1 and put the new array in parsedCollesions
      parsedCollesions = collisionsLevel1.parse2D();
      collisionBlocks = parsedCollesions.createObjectsFrom2D();

      player.collisionBlocks = collisionBlocks;

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/backgroundLevel1.png",
      });
      doors = [
        new Sprite({
          position: {
            x: 752,
            y: 273,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },
  2: {
    init: () => {
      $(canvas).fadeIn(2000);
      player = new Player({
        imageSrc: "./img/king/idle.png",
        frameRate: 11,
        animations: {
          idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idle.png",
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idleLeft.png",
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runLeft.png",
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runRight.png",
          },
          enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: "./img/king/enterDoor.png",
            oncomplete: () => {
              level++;
              $(canvas).fadeOut(2000, () => {
                console.log(level in levels);
                if (level in levels) {
                  levels[level].init();
                } else {
                  $("#p").fadeIn(2000);
                }
              });

              console.log(level);
            },
          },
        },
      });
      //use the parse2D() method to Orgnize collisionsLevel1 and put the new array in parsedCollesions
      parsedCollesions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollesions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/backgroundLevel2.png",
      });
      doors = [
        new Sprite({
          position: {
            x: 772,
            y: 336,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },
  3: {
    init: () => {
      $(canvas).fadeIn(2000);
      player = new Player({
        imageSrc: "./img/king/idle.png",
        frameRate: 11,
        animations: {
          idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idle.png",
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./img/king/idleLeft.png",
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runLeft.png",
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "./img/king/runRight.png",
          },
          enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: "./img/king/enterDoor.png",
            oncomplete: () => {
              level++;
              $(canvas).fadeOut(2000, () => {
                console.log(level in levels);
                if (level in levels) {
                  levels[level].init();
                } else {
                  $("#p").fadeIn(2000);
                }
              });

              console.log(level);
            },
          },
        },
      });
      //use the parse2D() method to Orgnize collisionsLevel1 and put the new array in parsedCollesions
      parsedCollesions = collisionsLevel3.parse2D();
      collisionBlocks = parsedCollesions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/backgroundLevel3.png",
      });
      doors = [
        new Sprite({
          position: {
            x: 176,
            y: 336,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },
};

const keys = {
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);

  background.draw();

  collisionBlocks.forEach((block) => {
    block.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });

  player.velocity.x = 0;
  player.handleInput(keys);
  player.draw();
  player.update();
}

levels[level].init();
//$(canvas).fadeIn(2000)

animate();

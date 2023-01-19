class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ imageSrc, frameRate, animations, loop });
    this.position = {
      x: 200,
      y: 200,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    //this.width=25;
    //this.height=25;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 0.8;

    this.collisionBlocks = collisionBlocks;
  }

  switchSprite(name) {
    //dont set currentframe to 0 if we already in same image
    if (this.image === this.animations[name].image) return;
    this.CurrentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
    this.loop = this.animations[name].loop;
  }

  update() {
    //ctx.fillStyle='rgba(0,0,255,0.5)'
    //ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    this.position.x += this.velocity.x;

    this.updateHitbox();

    this.chickForHorizonralCpllision();

    this.ApplyGravity();

    this.updateHitbox();

    this.chickForVerticalCpllision();

    //ctx.fillStyle='rgba(0,0,255,0.5)';
    //ctx.fillRect(this.hitBox.position.x,this.hitBox.position.y,this.hitBox.width,this.hitBox.height);
  }

  handleInput(keys) {
    if (this.preventInput) return;
    if (keys.ArrowLeft.pressed) {
      this.switchSprite("runLeft");
      this.velocity.x = -5;
      this.lastDirection = "Left";
    } else if (keys.ArrowRight.pressed) {
      this.switchSprite("runRight");
      this.velocity.x = 5;
      this.lastDirection = "Right";
    } else {
      if (this.lastDirection === "Left") {
        this.switchSprite("idleLeft");
      } else {
        this.switchSprite("idleRight");
      }
    }
  }

  updateHitbox() {
    this.hitBox = {
      position: {
        x: this.position.x + 58,
        y: this.position.y + 34,
      },
      width: 50,
      height: 54,
    };
  }

  chickForHorizonralCpllision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      if (
        this.hitBox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitBox.position.x + this.hitBox.width >=
          collisionBlock.position.x &&
        this.hitBox.position.y <=
          collisionBlock.position.y + collisionBlock.height &&
        this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y
      ) {
        //collision on x axis when movimg to the left
        if (this.velocity.x < 0) {
          const offset = this.hitBox.position.x - this.position.x;
          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01;
          break;
        }
        //collision on x axis when movimg to the right
        if (this.velocity.x > 0) {
          const offset =
            this.hitBox.position.x - this.position.x + this.hitBox.width;
          this.position.x = collisionBlock.position.x - offset - 0.01;
          break;
        }
      }
    }
  }

  ApplyGravity() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  chickForVerticalCpllision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      if (
        this.hitBox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitBox.position.x + this.hitBox.width >=
          collisionBlock.position.x &&
        this.hitBox.position.y <=
          collisionBlock.position.y + collisionBlock.height &&
        this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y
      ) {
        // collision on x axis when movimg up
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitBox.position.y - this.position.y;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }
        //collision on x axis when movimg down
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitBox.position.y - this.position.y + this.hitBox.height;
          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }
}

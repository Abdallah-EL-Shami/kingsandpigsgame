class Sprite {
  constructor({
    position,
    imageSrc,
    frameRate = 1,
    animations,
    frameBuffer,
    loop = true,
    autoplay = true,
  }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.frameRate = frameRate;
    this.CurrentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
    this.animations = animations;
    this.loop = loop;
    this.autoplay = autoplay;

    if (this.animations) {
      //create new image for every state of animation
      //and set image.src for each one
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        //put image propertie in every object,
        //inside animation object in index.js when create Player
        this.animations[key].image = image;
      }
    }
  }

  draw() {
    //MAKE SURE THE IMAGE LOADED
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: this.width * this.CurrentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };

    ctx.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.updateFrame();
  }

  play() {
    this.autoplay = true;
  }

  updateFrame() {
    if (!this.autoplay) return;
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.CurrentFrame < this.frameRate - 1) {
        this.CurrentFrame++;
      } else if (this.loop) {
        //dont loop images unless loop is true
        this.CurrentFrame = 0;
      }
    }
  }
}

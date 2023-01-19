window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;

  switch (event.key) {
    //jump
    case "ArrowUp":
      console.log("pressed");
      for (i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (
          player.hitBox.position.x + player.hitBox.width <=
            door.position.x + door.width &&
          player.hitBox.position.x >= door.position.x &&
          player.hitBox.position.y <= door.position.y + door.height &&
          player.hitBox.position.y + player.hitBox.height >= door.position.y
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          //$(document).ready(function(){

          //})
          player.animations["enterDoor"].oncomplete();

          return;
        }
      }
      if (player.velocity.y === 0) {
        player.velocity.y = -25;
      }
      keys.ArrowUp.pressed = true;
      break;

    //left
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    //right
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    //left
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    //right
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});

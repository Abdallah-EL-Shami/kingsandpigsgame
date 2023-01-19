//make custom method to Orgnize the array
Array.prototype.parse2D = function () {
  const rows = []; //make rows
  for (i = 0; i < this.length; i += 16) {
    //put every 16 item in array and push it inside another array as an item
    rows.push(this.slice(i, i + 16)); //start slice every 16 >>slice(start,end)
  }
  return rows;
};

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];
  this.forEach((row, rowindex) => {
    row.forEach((symbol, xindex) => {
      if (symbol === 292 || symbol === 250) {
        //push a new collission into collisionbloks array
        objects.push(
          new CollisionBlock({
            position: {
              x: xindex * 64,
              y: rowindex * 64,
            },
          })
        );
      }
    });
  });
  return objects;
};

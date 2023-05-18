class Pino {
  constructor(x, y) {
    var options = {
      isStatic: false,
    };

    this.pino = Bodies.rectangle(x, y, 70, 70, options);
    World.add(world, this.pino);
    this.image=loadImage("pino.png")
  }
  display() {
    var pos = this.pino.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 70, 70);
  }
}

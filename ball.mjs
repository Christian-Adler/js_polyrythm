class Ball {
  constructor(track, radius, speed) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.center = {x: 0, y: 0};
  }

  draw(ctx) {
    this.center = this.track.getPosition(this.offset);
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  move() {
    this.offset += this.speed;
  }
}

export {Ball};
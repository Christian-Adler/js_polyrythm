import {playSound} from "./sound.mjs";

class Ball {
  constructor(track, radius, speed, soundFrequency) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrequency = soundFrequency;
    this.offset = 0;
    this.direction = 1;
    this.center = {x: 0, y: 0};
  }

  draw(ctx) {
    this.center = this.track.getPosition(this.offset);
    if (this.center.y > this.track.center.y) {
      this.direction *= -1;
      playSound(this.soundFrequency);
    }
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  move() {
    this.offset += this.speed * this.direction;
  }
}

export {Ball};
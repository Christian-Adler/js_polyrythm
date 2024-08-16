import {playSound} from "./sound.mjs";

class Ball {
  constructor(track, radius, speed, soundFrequency, hue) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrequency = soundFrequency;
    this.hue = hue;
    this.offset = 0;
    this.round = 0;
    this.center = {x: 0, y: 0};
  }

  draw(ctx) {
    const res = this.track.getPosition(this.offset);
    this.center = {x: res.x, y: res.y};
    if (res.round !== this.round) {
      this.round = res.round;
      playSound(this.soundFrequency);
    }

    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = `hsl(${this.hue},100%,50%)`;
    ctx.fill();
    ctx.stroke();
  }

  move() {
    this.offset += this.speed;
  }
}

export {Ball};
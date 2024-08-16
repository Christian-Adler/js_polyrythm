class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, false);
    for (let a = 0; a < Math.PI * 2; a += 0.01) {
      const pos = this.getPosition(a);
      ctx.lineTo(pos.x, pos.y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  getPosition(offset) {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y - Math.sin(offset) * this.radius
    };
  }
}

export {Track};
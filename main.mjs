import {Track} from "./track.mjs";
import {Ball} from "./ball.mjs";

const canvas = document.getElementById("canvasId");
const ctx = canvas.getContext('2d');

let worldWidth = canvas.width;
let worldHeight = canvas.height;
let worldWidth2 = worldWidth / 2;
let worldHeight2 = worldHeight / 2;
let worldUpdated = true;

const updateWorldSettings = () => {
  if (worldHeight !== window.innerHeight || worldWidth !== window.innerWidth) {
    worldWidth = window.innerWidth;
    worldHeight = window.innerHeight;
    worldWidth2 = worldWidth / 2;
    worldHeight2 = worldHeight / 2;
    canvas.width = worldWidth;
    canvas.height = worldHeight;
    worldUpdated = true;
  }
};

updateWorldSettings();

const trackCenter = {x: worldWidth2, y: worldHeight2};
const trackMinRadius = 100;
const trackStep = 15;

const ballRadius = 6;
const ballMinSpeed = Math.PI * 0.005;
const ballSpeedStep = -Math.PI * 0.0001;

const soundFrequencies = [
  1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880,
  783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 440, 392, 349.23,
  329.63, 293.66, 261.63
];

const tracks = [];
const balls = [];
const N = 20;

for (let i = 0; i < N; i++) {
  const ballSoundFrequency = soundFrequencies[i];
  const hue = (i * 360) / N;

  const track = new Track(trackCenter, trackMinRadius + i * trackStep, hue);

  const ball = new Ball(track, ballRadius, ballMinSpeed + i * ballSpeedStep, ballSoundFrequency, hue);
  tracks.push(track);
  balls.push(ball);
}


const update = () => {

  ctx.clearRect(0, 0, worldWidth, worldHeight);

  for (const track of tracks) {
    track.draw(ctx);
  }
  for (const ball of balls) {
    ball.move()
  }
  for (const ball of balls) {
    ball.draw(ctx);
  }

  updateWorldSettings();

  requestAnimationFrame(update);
}

update();
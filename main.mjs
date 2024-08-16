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
const trackRadius = 100;

const ballRadius = 10;
const ballSpeed = 0.1;

const track = new Track(trackCenter, trackRadius);
const ball = new Ball(track, ballRadius, ballSpeed);


const update = () => {

  ctx.clearRect(0, 0, worldWidth, worldHeight);

  track.draw(ctx);
  ball.move()
  ball.draw(ctx);

  updateWorldSettings();

  requestAnimationFrame(update);
}

update();
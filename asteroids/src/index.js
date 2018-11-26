const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});

  const as = new Asteroid({ pos: [400, 400] });
  mo.draw(ctx);
  as.draw(ctx);
});

console.log("Filipp succs");
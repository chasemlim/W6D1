const Util = require('./util');
const MovingObject = require('./moving_object');


const DEFAULTS = {
  COLOR: "pink",
  RADIUS: 50
};

function Asteroid(options) {
  this.color = DEFAULTS.COLOR;
  this.radius = DEFAULTS.RADIUS;

  let params = {
    pos: options.pos,
    vel: Util.randomVec(Math.random() * 1500),
    radius: this.radius,
    color: this.color,
    game: options.game
  };

  MovingObject.call(this, params);
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;

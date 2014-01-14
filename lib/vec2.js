module.exports = Vec2;

const NORTH = new Vec2(0, -1);
const NORTH_EAST = new Vec2(1, -1);
const EAST = new Vec2(1, 0);
const SOUTH_EAST = new Vec2(1, 1);
const SOUTH = new Vec2(0, 1);
const SOUTH_WEST = new Vec2(-1, 1);
const WEST = new Vec2(-1, 0);
const NORTH_WEST = new Vec2(-1, -1);
const NONE = new Vec2(0, 0);

function Vec2(x, y) {
  this.x = x;
  this.y = y;
}

Object.defineProperty(Vec2, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

Vec2.add = function(a, b) {
  return new Vec2(a.x + b.x, a.y + b.y);
};

Vec2.sub = function(a, b) {
  return new Vec2(a.x - b.x, a.y - b.y);
};

Vec2.mul = function(a, b) {
  return new Vec2(a.x * b.x, a.y * b.y);
};

Vec2.div = function(a, b) {
  return new Vec2(a.x / b.x, a.y / b.y);
};

Vec2.dot = function(a, b) {
  return a.x * b.x + a.y * b.y
};

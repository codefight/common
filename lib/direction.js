/**
 * @class Direction
 */
module.exports = Object.freeze({
  /**
   * @property {vec2} NORTH
   * @final
   * @static
   */
  NORTH: Object.freeze([0, -1]),
  /**
   * @property {vec2} NORTH_EAST
   * @final
   * @static
   */
  NORTH_EAST: Object.freeze([1, -1]),
  /**
   * @property {vec2} EAST
   * @final
   * @static
   */
  EAST: Object.freeze([1, 0]),
  /**
   * @property {vec2} SOUTH_EAST
   * @final
   * @static
   */
  SOUTH_EAST: Object.freeze([1, 1]),
  /**
   * @property {vec2} SOUTH
   * @final
   * @static
   */
  SOUTH: Object.freeze([0, 1]),
  /**
   * @property {vec2} SOUTH_WEST
   * @final
   * @static
   */
  SOUTH_WEST: Object.freeze([-1, 1]),
  /**
   * @property {vec2} WEST
   * @final
   * @static
   */
  WEST: Object.freeze([-1, 0]),
  /**
   * @property {vec2} NORTH_WEST
   * @final
   * @static
   */
  NORTH_WEST: Object.freeze([-1, -1]),
  /**
   * No direction.
   *
   * @property {vec2} NONE
   * @final
   * @static
   */
  NONE: Object.freeze([0, 0]),
  /**
   * All directions.
   *
   * @property {vec2} OMNI
   * @final
   * @static
   */
  OMNI: Object.freeze([0, 0])
});

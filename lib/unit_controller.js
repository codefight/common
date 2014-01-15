/**
 * @class UnitController
 */
module.exports = {
  /**
   * @property {Unit} unit
   * @final
   */
  get unit() {},
  /**
   * @method attack
   * @param  {vec2} target
   */
  attack: function(target) {},
  /**
   * @method move
   * @param  {vec2} position
   */
  move: function(position) {},
  /**
   * @method senseNearbyUnits
   * @return {Unit[]}
   */
  senseNearbyUnits: function() {}
};

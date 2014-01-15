/**
 * @class UnitType
 *
 * @property {int} maxHealth
 * @property {int} sensorRadius
 * @property {int} attackPower
 */
module.exports = {
  /**
   * @property {UnitType} HQ
   * @static
   * @final
   */
  HQ: Object.freeze({maxHealth: 1000, sensorRadius: 10, attackPower: 30}),
  /**
   * @property {UnitType} BUILDER
   * @static
   * @final
   */
  BUILDER: Object.freeze({maxHealth: 150, sensorRadius: 6, attackPower: 20}),
  /**
   * @property {UnitType} SOLDIER
   * @static
   * @final
   */
  SOLDIER: Object.freeze({maxHealth: 100, sensorRadius: 4, attackPower: 35})
};

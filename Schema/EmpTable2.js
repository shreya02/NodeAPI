/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmpTable2', {
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    emailallot: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps:false,
    tableName: 'EmpTable2'
  });
};

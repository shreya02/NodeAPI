/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Department', {
    DEPTNO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    DNAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LOC: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'Department',
    timestamps:false
  });
};

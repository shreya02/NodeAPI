/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Salary', {
    GRAD: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    LOSAL: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HISAL: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'Salary',
    timestamps:false
  });
};

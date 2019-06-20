/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Punchcard_Data', {
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Actual_Punch_In: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Actual_Punch_Out: {
      type: DataTypes.TIME,
      allowNull: true
    },
    PunchOutTime_Fullday: {
      type: DataTypes.TIME,
      allowNull: true
    },
    PunchOutTime_Halfday: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'Punchcard_Data',
    timestamps:false
  });
};

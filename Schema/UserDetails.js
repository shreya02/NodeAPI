/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserDetails', {
    Username: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Email_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PhoneNo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'UserDetails',
    timestamps:false
  });
};

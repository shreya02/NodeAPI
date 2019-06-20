/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    EMPNO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ENAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    JOB: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MGR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HIREDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SAL: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COMM: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DEPTNO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'Employee',
    timestamps:false
  });
};

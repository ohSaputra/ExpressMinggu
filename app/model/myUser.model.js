module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    emp_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    hire_date: DataTypes.DATE,
  }, {
    paranoid: true,
    freezeTableName: true,
  })
}
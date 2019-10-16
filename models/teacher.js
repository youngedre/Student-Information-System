module.exports = function (sequelize, DataTypes) {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    classroom_number: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Teacher.associate = function (models) {
    // Associating Teachers with Students
    Teacher.hasMany(models.Student);
  };

  return Teacher;
};

module.exports = function (sequelize, DataTypes) {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    classroom_number: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Teacher.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Teacher.hasMany(models.Student, {
      onDelete: 'cascade'
    });
  };
  // Teacher.associate = function (models) {
  //   // Associating Teachers with Students
  //   Teacher.hasMany(models.Student);
  // };

  return Teacher;
};

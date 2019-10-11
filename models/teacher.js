module.exports = function (sequelize, DataTypes) {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    classroom_number: DataTypes.INTEGER,
    phone_number: DataTypes.INTEGER,
    email: DataTypes.STRING
  });

  Teacher.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Teacher.hasMany(models.student, {
      onDelete: 'cascade'
    });
  };

  return Teacher;
};

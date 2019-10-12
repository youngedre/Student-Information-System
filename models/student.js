module.exports = function (sequelize, DataTypes) {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ethnicity: {
      type: DataTypes.STRING
    },
    primaryLanguage: {
      type: DataTypes.STRING
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emergencyContactPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emergencyContactRelation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doctorName: {
      type: DataTypes.STRING
    },
    doctorPhone: {
      type: DataTypes.STRING
    },
    dentistName: {
      type: DataTypes.STRING
    },
    dentistPhone: {
      type: DataTypes.STRING
    },
    allergies: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    allergyDescription: {
      type: DataTypes.STRING
    }
  });
  return Student;
};

// Possible additions ---
// Computer access: true or false
// permission to pick-up

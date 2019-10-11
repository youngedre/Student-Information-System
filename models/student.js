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
      type: DataTypes.DATEONLY
    },
    gender: {
      type: DataTypes.STRING
    },
    ethnicity: {
      type: DataTypes.STRING
    },
    primaryLanguage: {
      type: DataTypes.STRING
    },
    emergencyContactName: {
      type: DataTypes.STRING
    },
    emergencyContactPhone: {
      type: DataTypes.STRING
    },
    emergencyContactRelation: {
      type: DataTypes.STRING
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
      type: DataTypes.STRING
    }
  });
  return Student;
};

// Possible additions ---
// Computer access: true or false
// permission to pick-up

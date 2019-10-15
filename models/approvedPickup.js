module.exports = function (sequelize, DataTypes) {
  const Approved = sequelize.define('Approved', {
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
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Approved.associate = (models) => {
    Approved.belongsToMany(models.Student, {
      through: 'StudentApprovedPickup',
      as: 'students',
      foreignKey: 'approvedPickupId'
    });
  };
  return Approved;
};

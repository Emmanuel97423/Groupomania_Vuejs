module.exports = (sequelize, DataTypes) => {
  const UserDelete = sequelize.define("UserDelete", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  return UserDelete;
};

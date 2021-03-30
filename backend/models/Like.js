module.exports = (sequelize, DataTypes) => {
  const LikeDb = sequelize.define(
    "LikeDb",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "Post",
          key: "id",
        },
      },
    },

    {
      indexes: [
        {
          unique: true,
          fields: ["userId", "postId"],
        },
      ],
    }
  );

  return LikeDb;
};
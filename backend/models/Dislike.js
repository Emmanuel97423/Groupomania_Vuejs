module.exports = (sequelize, DataTypes) => {
  const DislikeDb = sequelize.define(
    "DislikeDb",
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

  return DislikeDb;
};

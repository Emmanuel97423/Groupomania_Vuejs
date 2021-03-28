module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userFirstName: {
      type: DataTypes.STRING,
      allowNull: true,
      reference: {
        model: "User",
        key: "firstName",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "User",
        key: "id",
      },
    },
    userAvatarUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      reference: {
        model: "User",
        key: "avatarUrl",
      },
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userdislike: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userLiked: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userDisliked: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  return Post;
};

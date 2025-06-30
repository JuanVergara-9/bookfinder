export default (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user_profiles',
    timestamps: true
  });

  return UserProfile;
};

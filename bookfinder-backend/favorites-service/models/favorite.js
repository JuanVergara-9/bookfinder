export default (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING
    },
    authors: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'favorites',
    timestamps: true
  });

  return Favorite;
};

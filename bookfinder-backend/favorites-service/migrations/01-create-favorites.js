export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    book_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING
    },
    authors: {
      type: Sequelize.STRING
    },
    thumbnail: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('favorites');
}

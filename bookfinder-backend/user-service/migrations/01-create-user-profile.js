export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_profiles', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    profile_picture: {
      type: Sequelize.STRING
    },
    birthdate: {
      type: Sequelize.DATEONLY
    },
    province: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    bio: {
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
  await queryInterface.dropTable('user_profiles');
}

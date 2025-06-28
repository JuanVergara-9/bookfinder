import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
);

// Cargar todos los modelos correctamente
const modelFiles = fs
  .readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
  );

for (const file of modelFiles) {
  const { default: modelDefiner } = await import(`./${file}`);
  const model = modelDefiner(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;


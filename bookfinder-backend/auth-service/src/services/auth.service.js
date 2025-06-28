import db from '../../models/index.js';
import bcrypt from 'bcrypt';

const { User } = db;

// Buscar usuario por email
const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

// Crear un nuevo usuario con contraseña hasheada
const createUser = async ({ email, password, first_name, last_name }) => {
  const password_hash = await bcrypt.hash(password, 10);
  return await User.create({ email, password: password_hash, first_name, last_name });
};

// Validar contraseña
const validatePassword = async (plainPassword, hash) => {
  return await bcrypt.compare(plainPassword, hash);
};

// Export default para uso con ESModules
export default {
  findUserByEmail,
  createUser,
  validatePassword
};
import authService from '../services/auth.service.js';
import { generateToken } from '../utils/jwt.js';

// Registrar usuario
export const register = async (req, res) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const existingUser = await authService.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    const newUser = await authService.createUser({
      email,
      password,
      first_name,
      last_name
    });

    const token = generateToken(newUser);

    res.status(201).json({
      token,
      userId: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name
    });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

    const validPassword = await authService.validatePassword(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = generateToken(user);

    res.status(200).json({
      token,
      userId: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener usuario autenticado
export const me = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      userId: user.userId,
      first_name: user.first_name,
      last_name: user.last_name
    });
  } catch (error) {
    res.status(500).json({ error: 'Error interno' });
  }
};

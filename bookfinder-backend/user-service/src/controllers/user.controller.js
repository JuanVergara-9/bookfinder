import db from '../../models/index.js';

const { UserProfile } = db;

// GET /users/me
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await UserProfile.findByPk(userId);

    if (!profile) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// PUT /users/me
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await UserProfile.findByPk(userId);
    if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });

    const { first_name, last_name, profile_picture, birthdate, province, city, bio } = req.body;

    await profile.update({ first_name, last_name, profile_picture, birthdate, province, city, bio });

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error al actualizar perfil:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

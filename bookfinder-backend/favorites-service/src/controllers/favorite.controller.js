import db from '../../models/index.js';

const { Favorite } = db;

// GET /favorites → Lista de favoritos del usuario
export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.userId;
    const favorites = await Favorite.findAll({ where: { user_id: userId } });
    res.status(200).json(favorites);
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// POST /favorites → Agregar libro a favoritos
export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { book_id, title, authors, thumbnail, description } = req.body;

    const existing = await Favorite.findOne({ where: { user_id: userId, book_id } });
    if (existing) return res.status(409).json({ error: 'Ya está en favoritos' });

    const favorite = await Favorite.create({
      user_id: userId,
      book_id,
      title,
      authors,
      thumbnail,
      description
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error('Error al agregar favorito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// DELETE /favorites/:bookId → Eliminar libro favorito
export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { bookId } = req.params;

    const deleted = await Favorite.destroy({ where: { user_id: userId, book_id: bookId } });

    if (deleted === 0) {
      return res.status(404).json({ error: 'Libro no encontrado en favoritos' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar favorito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

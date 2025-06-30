import express from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favorite.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', verifyToken, getFavorites);
router.post('/', verifyToken, addFavorite);
router.delete('/:bookId', verifyToken, removeFavorite);

export default router;

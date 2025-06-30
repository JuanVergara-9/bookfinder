import express from 'express';
import { favoritesService } from '../config/apiClient.js';
import { forwardRequest } from '../utils/proxy.js';

const router = express.Router();

router.get('/', (req, res) => forwardRequest(favoritesService, req, res, '/api/favorites'));
router.post('/', (req, res) => forwardRequest(favoritesService, req, res, '/api/favorites'));
router.delete('/:bookId', (req, res) => forwardRequest(favoritesService, req, res, `/api/favorites/${req.params.bookId}`));

export default router;

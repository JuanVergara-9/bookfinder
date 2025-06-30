import express from 'express';
import { authService } from '../config/apiClient.js';
import { forwardRequest } from '../utils/proxy.js';

const router = express.Router();

router.post('/register', (req, res) => forwardRequest(authService, req, res, '/api/auth/register'));
router.post('/login', (req, res) => forwardRequest(authService, req, res, '/api/auth/login'));
router.get('/me', (req, res) => forwardRequest(authService, req, res, '/api/auth/me'));

export default router;

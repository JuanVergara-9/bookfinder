import express from 'express';
import { userService } from '../config/apiClient.js';
import { forwardRequest } from '../utils/proxy.js';

const router = express.Router();

router.get('/me', (req, res) => forwardRequest(userService, req, res, '/api/users/me'));
router.put('/me', (req, res) => forwardRequest(userService, req, res, '/api/users/me'));

export default router;

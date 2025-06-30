import express from 'express';
import { getProfile, updateProfile } from '../controllers/user.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/me', verifyToken, getProfile);
router.put('/me', verifyToken, updateProfile);

export default router;

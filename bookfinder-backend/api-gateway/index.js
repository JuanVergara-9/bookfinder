import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import favoritesRoutes from './routes/favorites.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/favorites', favoritesRoutes);

app.get('/', (req, res) => {
  res.send('🌐 API Gateway funcionando');
});

app.listen(PORT, () => {
  console.log(`🌐 API Gateway escuchando en http://localhost:${PORT}`);
});

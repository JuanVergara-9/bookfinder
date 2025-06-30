import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import favoriteRoutes from './routes/favorite.routes.js';
import db from '../models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4003;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/favorites', favoriteRoutes);

// Ruta test
app.get('/', (req, res) => {
  res.send('⭐ Favorites-service funcionando');
});

// Conexión DB
db.sequelize.authenticate()
  .then(() => console.log('✅ Conectado a la base de datos'))
  .catch(err => console.error('❌ Error al conectar con la base de datos:', err));

// Servidor
app.listen(PORT, () => {
  console.log(`⭐ Favorites-service escuchando en http://localhost:${PORT}`);
});

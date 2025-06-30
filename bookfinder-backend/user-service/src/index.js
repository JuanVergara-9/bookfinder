import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import db from '../models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Ruta test
app.get('/', (req, res) => {
  res.send('🧠 User-service funcionando');
});

// Sync (opcional, para desarrollo)
db.sequelize.authenticate()
  .then(() => console.log('✅ Conexión DB exitosa'))
  .catch(err => console.error('❌ Error al conectar con DB:', err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🧠 User-service escuchando en http://localhost:${PORT}`);
});

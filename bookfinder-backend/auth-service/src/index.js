import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'; // modificá si tu archivo se llama distinto

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Auth Service funcionando 🔐');
});

// Servidor
app.listen(PORT, () => {
  console.log(`🔐 Auth-service escuchando en http://localhost:${PORT}`);
});
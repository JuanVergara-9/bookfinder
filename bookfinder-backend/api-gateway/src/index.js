import express from 'express';
import morgan from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Rutas de los microservicios
app.use('/auth', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use('/users', createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));
app.use('/favorites', createProxyMiddleware({ target: 'http://localhost:4003', changeOrigin: true }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 API Gateway escuchando en http://localhost:${PORT}`);
});

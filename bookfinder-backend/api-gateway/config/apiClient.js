import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const authService = axios.create({
  baseURL: process.env.AUTH_SERVICE_URL
});

export const userService = axios.create({
  baseURL: process.env.USER_SERVICE_URL
});

export const favoritesService = axios.create({
  baseURL: process.env.FAVORITES_SERVICE_URL
});

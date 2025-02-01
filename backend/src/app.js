
import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

const app = express();

// Mensajes de terminal para saber que está pasando
app.use(morgan('dev'));

app.use(express.json());

// Para que express pueda entender los datos que vienen de un formulario
app.use('/api/',authRoutes);


export default app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

// Mensajes de terminal para saber que está pasando
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Para que express pueda entender los datos que vienen de un formulario
app.use('/api/',authRoutes);
app.use('/api/',tasksRoutes);


export default app;
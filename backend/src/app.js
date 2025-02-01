
import express from 'express';
import morgan from 'morgan';

const app = express();

// Mensajes de consola
app.use(morgan('dev'));

export default app;
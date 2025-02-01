
import express from 'express';
import morgan from 'morgan';

const app = express();

// Mensajes de terminal para saber que está pasando
app.use(morgan('dev'));

export default app;
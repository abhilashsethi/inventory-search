import express from 'express';
import cors from 'cors';
import searchRoutes from './routes/search.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(searchRoutes);

export default app;

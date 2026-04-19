import express from "express";
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(cors()); //cor pra o front conseguir chamar a api
app.use(express.json()); //para o express ler as requests em json, se nao o body vem vazio no post

app.use('/api', taskRoutes);

export default app;
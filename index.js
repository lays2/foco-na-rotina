import 'reflect-metadata'; 
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 2. Importar as configurações e rotas
import { connectDatabase } from './config/database';
import { studyRoutes } from './routes/studyRoutes';
import { UserController } from './controller/usercontroller'; // Exemplo de uso de UserController

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Inicializa a instância do UserController (se necessário injetar em rotas)
const userController = new UserController(); 

// --- Middlewares ---
app.use(cors());
app.use(express.json()); // Para parsear o corpo das requisições como JSON

// --- Conexão com o Banco de Dados ---
// Esta função irá tentar conectar ao MongoDB
connectDatabase(); 

// --- Rotas ---
// Rota de saúde (Health Check)
app.get('/', (req, res) => {
  res.status(200).send('API de Estudos está online e funcionando!');
});

// Rotas específicas da sua aplicação
app.use('/api/studies', studyRoutes); 
app.get('/api/users', userController.getAllUsers.bind(userController)); // Exemplo de rota de usuário
// Se você tivesse um arquivo userroutes.ts, usaria: app.use('/api/users', userRoutes);

// --- Inicialização do Servidor ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
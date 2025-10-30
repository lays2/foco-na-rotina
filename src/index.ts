import 'reflect-metadata'; 
import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

// 2. Importar as configurações e rotas
import { connectDatabase } from './config/database';
import { studyRoutes } from './routes/studyRoutes';
import { UserController } from './controller/usercontroller'; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const userController = new UserController(); 

app.use(cors());
app.use(express.json());

connectDatabase(); 


app.get('/', (req, res) => {
  res.status(200).send('API de Estudos está online e funcionando!');
});

app.use('/api/studies', studyRoutes); 
app.get('/api/users', userController.getAllUsers.bind(userController)); 

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
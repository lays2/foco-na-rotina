// src/config/database.ts (Adaptado para MongoDB)

import { createConnection, ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

// O TypeORM usa 'mongodb' como tipo de driver para MongoDB
const databaseConfig: ConnectionOptions = {
  type: 'mongodb', 
  
  // A URL de conexão é a maneira mais comum de configurar o MongoDB
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/seu_banco_de_dados_mongodb',
  
  // As entidades TypeORM serão mapeadas para "Collections" no MongoDB
  entities: [__dirname + '/../models/**/*.ts'], 
  
  // O MongoDB não usa o conceito de "sincronização de esquema" como SQL, 
  // mas esta opção ainda é necessária.
  synchronize: true, 
  
  logging: false,
  
  // (Opcional) Adicione mais opções de conexão se necessário
  extra: {
    useUnifiedTopology: true,
  },
};

export const connectDatabase = async () => {
  try {
    await createConnection(databaseConfig);
    console.log('Conexão com o MongoDB (TypeORM) estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};
import { createConnection, ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseConfig: ConnectionOptions = {
  type: 'mongodb', 
  
  url: process.env.MONGO_URL || 'mgo_uri=mongodb+srv://santoslays67_db_user:1aVwDrQV1hcCAhN2@cluster0.pcm2qk9.mongodb.net/?appName=Cluster0on',
  
  
  entities: [__dirname + '/../models/**/*.ts'], 
  
  synchronize: true, 
  
  logging: false,
  

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
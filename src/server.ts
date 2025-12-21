
import app from './express';
import { connectDB , sequelizeOn } from './db/sequelize';
import './models/modelsIndex';

const PORT = process.env.PORT || 4000;


(async () => { 
  try {
    await connectDB();
    console.log('Database conectada ');
    await sequelizeOn.sync( { alter: true } );
    console.log('Todos los modelos conectados');
  
  
  } catch (error) {
    console.error('Error al conectar los modelos:', error);
  }

  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
; })();

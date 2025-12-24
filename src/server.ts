
import app from './express';
import { connectDB , sequelizeOn } from './db/sequelize';
import './models/ModelsIndex.ts';
import router from './userRoutes';

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
  app.use('/api', router)
  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
; })();

/*{
    "message": "Usuario registrado exitosamente",
    "user": {
        "id": "248b237c-0855-474d-8d83-18402ef0a841",
        "role": "user",
        "username": "UserTest",
        "email": "prueba@next.com",
        "updatedAt": "2025-12-24T02:44:15.101Z",
        "createdAt": "2025-12-24T02:44:15.101Z"
    }
} */
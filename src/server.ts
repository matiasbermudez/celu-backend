
import app from './express';
import { connectDB , sequelizeOn } from './db/sequelize';
import './models/ModelsIndex.ts';
import userRouter from './routes/user.routes';
import productRouter from './routes/product.routes';

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
  //RUTAS
  app.use('/user', userRouter)
  app.use('/product', productRouter)
  
  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
; })();

/*{
    {
    "message": "Usuario registrado exitosamente",
    "user": {
        "id": "9306a78e-1b3a-402e-8b4f-808f83a47440",
        "role": "user",
        "username": "UserTest",
        "email": "prueba@next.com",
        "updatedAt": "2025-12-24T03:15:11.987Z",
        "createdAt": "2025-12-24T03:15:11.987Z"
    }
}
    }
} */
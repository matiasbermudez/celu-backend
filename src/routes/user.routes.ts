import express from 'express';
import registrarUser from '../controllers/user.controller';
import loginUser from '../controllers/login.controller';
import authMiddleware from '../middlewares/auth.middleware';
import rolMiddleware from '../middlewares/rol.middleware';

const userRouter = express.Router();



userRouter.post('/registrar', registrarUser) ;

userRouter.post('/login', loginUser) ;

userRouter.get('/testAdmin', authMiddleware, rolMiddleware(['admin']), (req:any, res:any) => {
    try {
         res.json({
    message: 'Bienvenido admin',
    user: req.user,
  });
    }
    catch (error) {
        console.error('Error en la ruta /testAdmin:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
   
});




export default userRouter;
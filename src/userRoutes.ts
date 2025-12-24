import express from 'express';
import registrarUser from './controllers/userController';
import loginUser from './controllers/loginController';
import authMiddleware from './middlewares/auth.middleware';
import rolMiddleware from './middlewares/rol.middleware';

const router = express.Router();



router.post('/registrar', async (req, res) => {
    try {
    await registrarUser(req, res);
    } catch (error) {
        console.error('Error en la ruta /registrar:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});

router.post('/login', async (req, res) => {
    try {
        await loginUser(req, res);
    } catch (error) {
        console.error('Error en la ruta /login:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});

router.get('/testAdmin', authMiddleware, rolMiddleware(['admin']), (req:any, res:any) => {
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




export default router;
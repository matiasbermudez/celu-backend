import express from 'express';
import registrarUser from './controllers/userController';
import loginUser from './controllers/loginController';

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





export default router;
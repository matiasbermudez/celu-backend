import express from 'express';
import registrarUser from './controllers/userController';

const router = express.Router();



router.post('/registrar', async (req, res) => {
    try {
    await registrarUser(req, res);
    } catch (error) {
        console.error('Error en la ruta /registrar:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});





export default router;
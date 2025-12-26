import bcrypt from 'bcrypt';
import { User } from '../models/User.model';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

const loginUser = async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
        //Verifico campos obligatorios
        if (!email || !password) {
            return res.status(400).json({
                message: 'Faltan campos obligatorios',
            });
        }
        //Verificar si el usuario existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Contraseña inválida' });
        }

        //Genero el token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email , role: user.role },
            JWT_SECRET,
            { expiresIn: '12h' }
        );
        return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}

export default loginUser;
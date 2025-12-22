import bcrypt from 'bcrypt';
import { User } from '../models/User.model';

type RequestUser = {
    body: {
        username: string;
        email: string;
        password: string;
    };
};

const registrarUser = async (req: RequestUser, res: any) => {
    const { username, email, password } = req.body;

    try {

        //Verifico campos obligatorios
        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'Faltan campos obligatorios',
            });
        }

        //Verificar si el usuario ya existe
        const existeUser = await User.findOne({ where: { email } });
        if (existeUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        //Verifico largo de la contraseña
        if (password.length < 6) {
            return res.status(400).json({
                message: 'La contraseña debe tener al menos 6 caracteres',
            });
        }

        //Verifico formato del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Formato de email inválido' });
        }

        //Hasheao la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        //Creo el usuario
        const nuevoUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        const userSeguro = nuevoUser.toJSON();
        delete userSeguro.password;
        return res.status(201).json({ message: 'Usuario registrado exitosamente', user: userSeguro });

    } 
    
    catch (error) {
        console.error('Error al registrar el usuario:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}
export default registrarUser;

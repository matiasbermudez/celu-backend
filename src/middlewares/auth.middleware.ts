import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
    user?: any; 
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization

    //Verifico la existencia del token
    if (!authHeader) {
        return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }

    //Verifico Bearer y token
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
            return res.status(401).json({ message: 'Token de autenticación inválido' });
    }

    try {
        const decodificar = jwt.verify(token, process.env.JWT_SECRET! as string);
        req.user = decodificar; //Guardo la info
        next(); //dejo pasar
    }
    catch (error) {
        return res.status(401).json({ message: 'Token de autenticación inválido' });
    }

}

export default authMiddleware;
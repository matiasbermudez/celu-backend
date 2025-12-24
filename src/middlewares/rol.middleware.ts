import { Request, Response, NextFunction } from 'express';
import authMiddleware, { AuthRequest } from './auth.middleware';

const rolMiddleware = (rolesPermitidos: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {

        if (!req.user) {
            return res.status(401).json({ message: 'Usuario no autenticado' });
        }


        //Validar el rol

        if (!rolesPermitidos.includes(req.user.role)) {
            return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
        }

        next();

    }


}
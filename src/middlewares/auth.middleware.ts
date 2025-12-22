import jwt from 'jsonwebtoken';

const authMiddleware = (req: any, res: any, next: any) => {

    const authHeader = req.headers.autorization

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
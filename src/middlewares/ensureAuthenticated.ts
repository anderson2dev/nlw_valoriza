import  {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const secret = process.env.SECRET;
    const token = req.headers.authorization?.split(' ')[1];
    if(!token)
        return res.sendStatus(401);
    if(!secret)
        return res.sendStatus(500);
    try {
        const { sub } = verify(token, secret) as IPayload;
        if (!sub)
            return res.sendStatus(401);
        req.user_id = sub;
        return next();
    } catch (err) {
        console.trace(err);
        return res.sendStatus(500);
    }
   
}
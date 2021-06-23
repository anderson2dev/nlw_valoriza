import  {Request, Response, NextFunction} from 'express';


export function ensureAdmin(req: Request, res: Response, next: NextFunction): any {
    const admin = false;

    if (admin) 
        return next();
    return res.status(403).send({message: 'You need to be an admin to perform this kind of operation'});
}
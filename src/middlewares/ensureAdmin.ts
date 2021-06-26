import  {Request, Response, NextFunction} from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../domain/repositories/UsersRepository';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction): Promise<any> {
    const userId = req.user_id;
    const userRepository = getCustomRepository(UsersRepository);
    try {
        const userData =  await  userRepository.findOne(userId);
        if (userData?.admin) 
            return next();
        return res.status(403).send({message: 'You need to be an admin to perform this kind of operation'});
        
    } catch (e) {
        return res.sendStatus(500);
    }
}
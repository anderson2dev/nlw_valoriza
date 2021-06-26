import {Request, Response} from 'express';
import { AuthenticateUserService, IUserAuthenticateRequest } from '../services/AuthenticateUserService';

export class AuthenticateUserController {
    static async handle (req: Request, res: Response) {
        const authenticateUserService = new AuthenticateUserService();
        const {email, password}: IUserAuthenticateRequest = req.body;
        try {
            const token = await authenticateUserService.execute({email, password});
            return res.status(200).send({token});
        } catch (e: any) {
            console.trace(e);
            return res.status(500).send({message: e.message});
        }

    }
}
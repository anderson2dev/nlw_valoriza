import {Request, Response} from 'express';
import { ListUsersService } from '../services/ListUsersServices';
export class ListUsersController {
    static async handle(req: Request, res: Response) {
        const listUsersService = new ListUsersService();
        try {
            const users = await listUsersService.execute();
            return res.status(200).json(users);
        } catch(e) {
            console.trace(e);
        }
    }
}
import  {Request, Response} from 'express';
import {ListAllSendComplimentService} from '../services/ListAllSendComplimentService';


export class ListAllSendComplimentController  {
    static async handle(req: Request, res: Response) {
        const sender_id = req.user_id;
        const listAllSendComplimentService = new ListAllSendComplimentService();
        try {
            const data = await listAllSendComplimentService.execute(sender_id);
            return res.status(200).send(data);
        } catch (e) {
            console.trace(e);
            res.sendStatus(500);
        }
    }
}
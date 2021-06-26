import  {Request, Response} from 'express';
import  { ListAllReceiveComplimentService } from '../services/ListAllReceiveComplimentService'


export class ListAllReceiveComplimentController  {
    static async handle(req: Request, res: Response) {
        const sender_id = req.user_id;
        const listAllReceiveComplimentService = new ListAllReceiveComplimentService();
        try {
            const data = await listAllReceiveComplimentService.execute(sender_id);
            return res.status(200).send(data);
        } catch (e) {
            console.trace(e);
            res.sendStatus(500);
        }
    }
}
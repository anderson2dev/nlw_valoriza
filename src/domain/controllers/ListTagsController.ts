import {Request, Response} from 'express';
import  {ListTagsService} from '../services/ListTagsService';

export class ListTagsController {
    static async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsService();
        try {
            const tags = await listTagsService.execute();
            if (tags)
                return res.status(200).send(tags);
            else    
                return res.sendStatus(404);
        }catch  (e) {   
            console.trace(e);
            return res.sendStatus(500);
        }
    }
}
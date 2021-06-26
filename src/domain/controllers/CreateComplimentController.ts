import {Request, Response} from 'express';
import {CreateComplimentService, IComplimentRequest} from '../services/CreateComplimentService';


class CreateComplimentController {
    
    static async handle(req: Request, res: Response) {
        const {tagId, message, userReceiverId}: IComplimentRequest = req.body;
        const userSenderId = req.user_id;
        const createComplimentService = new CreateComplimentService();
        try {
            const complimentData = await createComplimentService.execute({tagId, message, userReceiverId, userSenderId});
            if (!complimentData)
                return res.status(500).send({message: 'An error has occurred when trying to create a compliment, please try again later'});
            return res.status(201).send(complimentData);
        }  catch (e: any) {
            res.status(500).json({message: e.message});
        }
    }
}

export {CreateComplimentController};
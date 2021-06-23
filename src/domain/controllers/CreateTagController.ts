import {Request, Response} from 'express';
import { CreateTagService, ITagRequest } from '../services/CreateTagService';

class CreateTagController {
    static async create(req: Request, res: Response) {
        const createTagService = new CreateTagService();
        const {name}: ITagRequest = req.body;
        try {   
            const createdTag = await createTagService.create({name});
            return res.status(201).json(createdTag); 
        } catch (e: any) {
            return res.status(400).json({message: e.message});
        }
    }
}

export  { CreateTagController }
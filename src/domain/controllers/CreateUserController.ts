import { Request, Response } from "express";
import { CreateUserService, IUserRequest, IUserResponse } from "../services/CreateUserService";

export class CreateUserController {
   

    static async create(req: Request, res: Response): Promise<IUserResponse | any> {
        const {name, email, password, admin}:IUserRequest = req.body;
        const createUserService = new CreateUserService();
        try {
            const createdUser = await createUserService.execute({name, email, password, admin});
            if (createdUser === undefined)
                return res.status(500).send({message: 'Internal server error'});
            else 
                return res.status(201).json(createdUser);

        } catch (e: any) {
            console.trace(e);
            return res.status(400).send({message: e.message});
        }
    }
}
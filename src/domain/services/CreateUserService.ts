import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import {hash} from "bcrypt";

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean; 
}


export interface IUserResponse {
    id?: string;
    name: string;
    email: string;
    password?: string;
    admin?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}



export class CreateUserService {

    async execute({name, email, password, admin}: IUserRequest): Promise< IUserResponse | undefined> {
        const usersRepository = getCustomRepository(UsersRepository);

        if(!name)
            throw new Error('Name is an obligatory field and should not be left null');
        if (!password)
            throw new Error('Password is an obligatory field and should not be left null');
        if(!email)
            throw new Error('Email is an obligatory field and should not be left null');
        
        try {
            const existingUser = await usersRepository.findOne({where: {
                email
            }});
            if (existingUser !== undefined)
                throw new Error('There is already an user registered with this email');
            
            const hashedPassword = await hash(password, 10);
            const newUser = usersRepository.create({name, email, password: hashedPassword, admin});
            const user = await usersRepository.save(newUser);
            return user;

        } catch (e) {
            throw e;
        }
    }
    
}
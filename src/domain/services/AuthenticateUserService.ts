import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export interface IUserAuthenticateRequest {
    email: string,
    password: string;
}

export class AuthenticateUserService {
    async execute({email, password}: IUserAuthenticateRequest): Promise<string | void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const secret = process.env.SECRET;
        if (!email)
            throw new Error ('Email is an obligatory field and should not be left null');
        if(!password)
            throw new Error ('Password is an obligatory field and should not be left null');
        if (!secret)
            throw new Error ('An unknown error ocurred when trying to authenticate the user, please try again later');
        try {
            const userData = await usersRepository.findOne({where: {
                email
            }});
            if (!userData)
                throw new Error('No user found with these credentials');
            const compareResult = await compare(password, userData.password);
            if (!compareResult)
                throw new Error ('Invalid credentials');
            return sign({
                    email: userData.email
                }, 
                secret, 
                {
                    subject: userData.id,
                    expiresIn: "1d"
                }
            );
        } catch (e) {
            throw e;
        }

    }
}
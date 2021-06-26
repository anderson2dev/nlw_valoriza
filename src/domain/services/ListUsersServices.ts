import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

export class  ListUsersService {
    async execute() {
        const userRepository = getCustomRepository(UsersRepository);
        try {
            const users = await userRepository.find();
            return classToPlain(users);
        } catch (e) {
            throw e;
        }
    }   
}
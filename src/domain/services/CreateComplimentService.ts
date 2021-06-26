import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { TagsRepository } from "../repositories/TagsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

export interface IComplimentRequest {
    userSenderId?: string;
    userReceiverId: string;
    tagId: string;
    message: string;
}

class CreateComplimentService {

    async execute({userReceiverId, userSenderId, tagId, message}: IComplimentRequest) {
        const complimentRepository = getCustomRepository(ComplimentsRepository);
        const userRepository = getCustomRepository(UsersRepository);
        const tagRepository = getCustomRepository(TagsRepository);
        if(!userSenderId)
            throw new Error('Sender user info is necessary to create a compliment');
        if(!userReceiverId)
            throw new Error('Receiver user info is necessary to create a compliment');
        if(!tagId)
            throw new Error('Tag info is necessary to create a compliment');
        if (userSenderId === userReceiverId) 
            throw new Error('An user cannot send a compliment to himself');
        try {
            const sender = await userRepository.findOne({where: {
                id: userSenderId
            }});
            if (!sender)
                throw new Error('Current user not found');
            const tag = tagRepository.findOne({where: {
                id: tagId
            }});
            if (!tag)
                throw new Error('Invalid tag');
            const comment = complimentRepository.create({
                tagId, 
                userSenderId, 
                userReceiverId, 
                message
            });
            const createdComment = complimentRepository.save(comment);
            return createdComment;

        } catch (e) {
            throw e;
        }
    }
}

export {CreateComplimentService};
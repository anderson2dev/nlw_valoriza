import {getCustomRepository} from 'typeorm';
import {ComplimentsRepository} from '../repositories/ComplimentsRepository';


export class ListAllReceiveComplimentService {
    async execute(senderId: string) {
        if (!senderId)
            throw new Error ('Invalid sender data');
        const complimentRepository = getCustomRepository(ComplimentsRepository);
        try {
            const data = await complimentRepository.find({
                where: {
                    userReceiverId: senderId
                }
            });
            return data;
        } catch (e) {
           throw e;
        }
    }
}
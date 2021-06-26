import {getCustomRepository} from 'typeorm';
import {ComplimentsRepository} from '../repositories/ComplimentsRepository';


export class ListAllSendComplimentService {
    async execute(senderId: string) {
        if (!senderId)
            throw new Error ('Invalid sender data');
        const complimentRepository = getCustomRepository(ComplimentsRepository);
        try {

            const data = await complimentRepository.find({
                where: {
                    userSenderId: senderId
                },
                relations: [
                    'tag',
                    'userSender',
                    'userReceiver'
                ]
            });
            return data;
        } catch (e) {
           throw e;
        }
    }
}
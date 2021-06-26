import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import  {classToPlain} from 'class-transformer';

export class ListTagsService {
    async execute() {
        const tagsRepository = getCustomRepository(TagsRepository);
        try {   
            const tags = await tagsRepository.find();
            return classToPlain(tags);
        } catch (e) {
            throw e;
        }
    }
}
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

export interface ITagRequest {
    name: string;
}

export interface ITagResponse {
    id?: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}


class CreateTagService {
    async create({name}: ITagRequest) {
        if (!name) 
            throw new Error('Name is an obligatory field and should not be left null');
        const tagRepository = getCustomRepository(TagsRepository);
        try {
            const exitingTag = await tagRepository.findOne({where: {
                name
            }});
            if (exitingTag)
                throw new Error('There is already a tag created with this name'); 
            const tag = tagRepository.create({name});
            const createdtag = await tagRepository.save(tag);
            return createdtag;
        } catch (e) {
            throw e;
        }
    }

}

export { CreateTagService }
import { Entity, EntityRepository, Repository } from "typeorm";
import { Tag } from "../database/entities/Tag";

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag> {

}

export {TagsRepository};
import {Router} from 'express';
import { CreateTagController } from '../domain/controllers/CreateTagController';
import  {ListTagsController} from '../domain/controllers/ListTagsController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const tagsRouter = Router();

tagsRouter.post('/', ensureAuthenticated, ensureAdmin, CreateTagController.handle);
tagsRouter.get('/', ensureAuthenticated, ListTagsController.handle);

export {tagsRouter};
import {Router} from 'express';
import { CreateTagController } from '../domain/controllers/CreateTagController';
import { ensureAdmin } from '../middlewares/EnsureAdmin';

const tagsRouter = Router();

tagsRouter.post('/', ensureAdmin, CreateTagController.create);


export {tagsRouter};
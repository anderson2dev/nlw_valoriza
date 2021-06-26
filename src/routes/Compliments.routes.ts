import {Router} from 'express';
import { CreateComplimentController } from '../domain/controllers/CreateComplimentController';
import { ListAllReceiveComplimentController } from '../domain/controllers/ListAllReceiveComplimentsController';
import { ListAllSendComplimentController } from '../domain/controllers/ListAllSendComplimentsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const complimentsRouter = Router();

complimentsRouter.post('/', ensureAuthenticated, CreateComplimentController.handle);
complimentsRouter.get('/send', ensureAuthenticated, ListAllSendComplimentController.handle);
complimentsRouter.get('/received', ensureAuthenticated, ListAllReceiveComplimentController.handle);

export {complimentsRouter};
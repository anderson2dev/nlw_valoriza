import { Router } from "express";
import { AuthenticateUserController } from "../domain/controllers/AuthenticateUserController";
import { CreateUserController } from "../domain/controllers/CreateUserController";
import { ListUsersController } from "../domain/controllers/ListUsersController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouter = Router();

usersRouter.post('/', CreateUserController.handle);
usersRouter.post('/login', AuthenticateUserController.handle);
usersRouter.get('/', ensureAuthenticated, ListUsersController.handle);

export { usersRouter };
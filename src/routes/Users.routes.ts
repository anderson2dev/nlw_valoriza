import { Router } from "express";
import { CreateUserController } from "../domain/controllers/CreateUserController";

const usersRouter = Router();

usersRouter.post('/', CreateUserController.create);

export { usersRouter };
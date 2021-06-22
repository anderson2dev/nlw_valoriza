import { Router } from "express";
import { usersRouter } from "./Users.routes";

const router = Router();

router.use('/users', usersRouter);

export {router};
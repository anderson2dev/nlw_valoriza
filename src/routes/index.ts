import { Router, Request, Response } from "express";
import { usersRouter } from "./Users.routes";
import {tagsRouter } from './Tags.routes';
const router = Router();

router.use('/users', usersRouter);
router.use('/tags', tagsRouter);
export {router};
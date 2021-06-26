import { Router, Request, Response } from "express";
import { usersRouter } from "./Users.routes";
import {tagsRouter } from './Tags.routes';
import { complimentsRouter } from "./Compliments.routes";
const router = Router();

router.use('/compliments', complimentsRouter);
router.use('/users', usersRouter);
router.use('/tags', tagsRouter);
export {router};
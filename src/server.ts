import 'reflect-metadata';
import './domain/database';
import { router } from './routes';
import express from 'express';
import {config} from 'dotenv';
import 'express-async-errors';

config({path: './JWT_SECRET.env'});
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Listening on ${port}`);
    console.log(`DB is running on  ${process.env.POSTGRES_PORT}`)
    console.log(`JWT secret : ${process.env.SECRET}`);
})
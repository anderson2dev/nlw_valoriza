import 'reflect-metadata';
import './domain/database';
import { router } from './routes';
import express from 'express';
import 'express-async-errors';

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
import 'reflect-metadata';
import './domain/database';
import { router } from './routes';
import express from 'express';

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
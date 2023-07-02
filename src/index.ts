import express from 'express';
import { NODE_ENV, PORT } from './config/config';

const app = express();

app.listen(5000, () => {
    console.log(`api running in port: ${NODE_ENV} port: ${PORT}`);
})
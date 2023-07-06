import express from "express";
import { NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";

class App {
    public app: express.Application;
    public env: string;
    public port: number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = Number(PORT) || 5000;
    }
}

export default App;
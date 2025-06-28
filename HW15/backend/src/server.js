// server.js
import express from "express";
import cors from "cors";
import { createServer } from "http";

const createAppWithServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const httpServer = createServer(app); // Создаем HTTP сервер вручную

    return { app, httpServer };
};

export default createAppWithServer;

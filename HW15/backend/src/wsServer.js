// wsServer.js
import { Server } from "socket.io";

const startWebsocketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        console.log("🔌 Новый пользователь подключен:", socket.id);

        socket.on("chat message", (msg) => {
            console.log("📨 Сообщение:", msg);
            io.emit("message received", msg); // рассылаем всем
        });

        socket.on("disconnect", () => {
            console.log("❌ Пользователь отключился:", socket.id);
        });
    });
};

export default startWebsocketServer;

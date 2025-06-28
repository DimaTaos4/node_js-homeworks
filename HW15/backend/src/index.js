// index.js
import createAppWithServer from "./server.js";
import startWebsocketServer from "./wsServer.js";

const bootstrap = () => {
    const { app, httpServer } = createAppWithServer();

    // Стартуем WebSocket
    startWebsocketServer(httpServer);

    // Запуск HTTP + WebSocket сервера
    const PORT = 3000;
    httpServer.listen(PORT, () => {
        console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
    });
};

bootstrap();

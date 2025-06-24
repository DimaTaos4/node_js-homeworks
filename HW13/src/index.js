import "dotenv/config"

import startServer from "./server.js";
import connectDatabase from "./db/connectDB.js";

const bootstrap = async () => {
    await connectDatabase()
    startServer()
}

bootstrap()
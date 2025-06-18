import 'dotenv/config'
import startServer from "./server.js";

import './db/Nutzer.js'
import { connectDatabase } from './db/sequelize.js';
const bootstrap = async () => {
    await connectDatabase()
    startServer()
}
bootstrap()
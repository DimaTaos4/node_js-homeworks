import "dotenv/config"
import './db/Books.js'
import { createDatabase } from "./db/sequelize.js"
import startServer from "./server.js"
const bootstrap = async () => {
    await createDatabase()
    startServer()
}
bootstrap()
import "dotenv/config"
import './db/User.js'
import { connectDatabase } from "./db/sequelize.js"
import startServer from "./server.js"

const bootstrap = async () => {
    await connectDatabase()
    startServer()
}
bootstrap()
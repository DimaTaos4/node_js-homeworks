import "dotenv/config"
import './db/Category.js'
import './db/Product.js'
import startServer from "./server.js"
import connectDatabase from "./db/connectDatabase.js"
const bootstrap = async () => {
    await connectDatabase()
    startServer()
}
bootstrap()
import "dotenv/config"
import './server.js'
import { connectDatabase } from "./db/sequelize.js"
import Product from "./db/Product.js"
import startServer from "./server.js"


const bootstrap = async () => {
    await connectDatabase()
    await Product.sync()
    startServer()
}
bootstrap()
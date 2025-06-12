import 'dotenv/config'
import startServer from './server.js'
import { createServer } from './db/sequelize.js'
// import './db/App.js'
const bootstrap = async () => {
    await createServer()
    startServer()
}
bootstrap()
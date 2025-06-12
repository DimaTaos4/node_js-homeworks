import express from 'express'
import cors from 'cors'
import notFoundHandler from './middlewares/notFoundHandler.js'
import appsRouter from './routers/apps.routers.js'
import errorHandler from './middlewares/errorHandler.js'


const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use('/api/books', appsRouter)

    app.use(notFoundHandler)
    app.use(errorHandler)

    const port = process.env.PORT || 3500
    app.listen(port, () => {
        console.log(`Server running on ${port} Port`);
    })
}
export default startServer
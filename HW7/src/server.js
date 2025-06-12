import express from 'express'
import cors from 'cors'
import notFoundHandler from './middlewares/notFoundHandler.js'
import appRouter from './routers/app.router.js'
import errorHandler from './middlewares/errorHandler.js'

const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use('/api/apps', appRouter)

    app.use(notFoundHandler)
    app.use(errorHandler)
    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server running on 3000 Port`);
    })
}
export default startServer
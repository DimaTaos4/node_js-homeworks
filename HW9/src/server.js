import express from 'express'
import cors from 'cors'
import nutzerRouter from './routers/nutzers.router.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js'


const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use('/api/nutzer', nutzerRouter)

    app.use(notFoundHandler)
    app.use(errorHandler)
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server running on ${port} Port`);
    })
}
export default startServer
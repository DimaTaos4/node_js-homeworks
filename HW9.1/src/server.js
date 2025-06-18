import express from "express"
import cors from "cors"
import membersRouter from "./routes/members.route.js"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errroHandler.js"

const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use("/api/members", membersRouter)
    app.use(notFoundHandler)
    app.use(errorHandler)
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server running on ${port} Port`);
    })
}
export default startServer
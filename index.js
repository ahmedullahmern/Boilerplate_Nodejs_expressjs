import express from 'express'
import routes from './src/routes/index.js'
import mongoose from 'mongoose'
import ENV from './src/constant/index.js'
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    console.log("Hi Ahmed")
    res.send("Get Ki Request")
})

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@lms-app.oxyap.mongodb.net/${ENV.DB_NAME}`)
mongoose.connection.on("connected", () => {
    console.log("---DB_Connected---")
})

app.use("/api", routes)

app.listen("3000", () => {
    console.log("Server Is Runing Is 3000")
})
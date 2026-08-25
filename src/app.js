import express from "express"
import requestLogger from "./middleware/requestLogger"

const app = express()
app.use(express.json())

app.use(requestLogger)
export default app
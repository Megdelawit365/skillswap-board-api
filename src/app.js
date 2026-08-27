import express from "express"
import requestLogger from "./middleware/requestLogger.js"
import listingRoutes from "./routes/listingRoutes.js"
import responseRoutes from "./routes/responseRoutes.js"
import skillRoutes from "./routes/skillRoutes.js"
import { notFound } from "./middleware/notFound.js"

const app = express()
app.use(express.json())
app.use(requestLogger)

app.use("/api/listings", listingRoutes)
app.use("/api/listings/:id/responses", responseRoutes)
app.use("/api/skills", skillRoutes)

app.use(notFound)
export default app
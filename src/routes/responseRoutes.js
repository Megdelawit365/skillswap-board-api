import { Router } from "express";
import { createResponses, getResponses } from "../controllers/responseControllers.js";
import { validateResponse } from "../middleware/createValidation.js";
const router = Router()

router.get("/", getResponses)
router.post("/", validateResponse, createResponses)

export default router
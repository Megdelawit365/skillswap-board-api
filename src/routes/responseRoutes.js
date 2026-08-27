import { Router } from "express";
import { createResponses, getResponses } from "../controllers/responseControllers";
import { validateResponse } from "../middleware/createValidation";
const router = Router()

router.get("/", getResponses)
router.post("/", validateResponse, createResponses)

export default router
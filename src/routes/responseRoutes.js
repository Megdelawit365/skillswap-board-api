import { Router } from "express";
import { createResponses, getResponses } from "../controllers/responseControllers";
const router = Router()

router.get("/", getResponses)
router.post("/", createResponses)

export default router
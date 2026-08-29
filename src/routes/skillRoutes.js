import { Router } from "express";
import { createSkill, getSkills } from "../controllers/skillControllers.js";
import { validateSkill } from "../middleware/createValidation.js";
const router = Router()

router.get("/", getSkills)
router.post("/", validateSkill, createSkill)

export default router
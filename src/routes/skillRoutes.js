import { Router } from "express";
import { getSkills } from "../controllers/skillControllers";
const router = Router()

router.get("/", getSkills)

export default router
import { Router } from "express";
import { getListings } from "../controllers/listingControllers.js"
const router = Router()

router.get("/", getListings)
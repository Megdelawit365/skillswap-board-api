import { Router } from "express";
import { getListingById, getListings } from "../controllers/listingControllers.js"
const router = Router()

router.get("/", getListings)
router.get("/:id", getListingById)
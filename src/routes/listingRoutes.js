import { Router } from "express";
import { createListing, deleteListing, getListingById, getListings, updateListing } from "../controllers/listingControllers.js"
import { validateListing } from "../middleware/createValidation.js";
const router = Router()

router.get("/", getListings)
router.get("/:id", getListingById)
router.post("/", validateListing, createListing)
router.put("/:id", updateListing)
router.delete("/:id", deleteListing)

export default router
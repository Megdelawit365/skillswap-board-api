import { Router } from "express";
import { createListing, deleteListing, getListingById, getListings, updateListing } from "../controllers/listingControllers.js"
import { validateListing } from "../middleware/createValidation.js";
import { validateId } from "../middleware/idValidation.js"
const router = Router()

router.get("/", getListings)
router.get("/:id", validateId, getListingById)
router.post("/", validateListing, createListing)
router.put("/:id", validateId, updateListing)
router.delete("/:id", validateId, deleteListing)

export default router
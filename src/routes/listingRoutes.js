import { Router } from "express";
import { createListing, deleteListing, getListingById, getListings, updateListing } from "../controllers/listingControllers.js"
import { validateListing } from "../middleware/createValidation.js";
import { validateId } from "../middleware/idValidation.js"
import { validateListingUpdate } from "../middleware/updateValidation.js";
const router = Router()

router.get("/", getListings)
router.get("/:id", validateId, getListingById)
router.post("/", validateListing, createListing)
router.put("/:id", validateId, validateListingUpdate, updateListing)
router.delete("/:id", validateId, deleteListing)

export default router
import { Router } from "express";
import { createListing, deleteListing, getListingById, getListings, updateListing } from "../controllers/listingControllers.js"
const router = Router()

router.get("/", getListings)
router.get("/:id", getListingById)
router.post("/", createListing)
router.put("/:id", updateListing)
router.delete("/:id", deleteListing)

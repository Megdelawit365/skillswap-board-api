
import * as listingService from "../services/listingServices.js"
export const getListings = async (req, res) => {
    try {
        const listings = await listingService.getListings()
        return res.status(200).json({
            data: listings
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}

export const getListingById = async (req, res) => {
    try {
        const listing = await listingService.getListingById(req.params.id)
        return res.status(200).json({
            data: listing
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
export const createListing = async (req, res) => {
    try {
        const body = req.body
        const newListing = await listingService.createListing(body)
        return res.status(201).json({
            message: "Listing created successfully.",
            data: newListing
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
export const updateListing = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedMovie = await listingService.updateListing(id, body)
        return res.status(200).json({
            message: "Listing updated successfully.",
            data: updatedMovie
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
export const deleteListing = async (req, res) => {
    try {
        const id = req.params.id
        const listing = await listingService.deleteListing(id)
        if (!listing) {
            return res.status(404).json({ message: "Listing not found." })
        }
        return res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
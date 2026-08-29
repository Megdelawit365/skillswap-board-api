
import * as listingService from "../services/listingServices.js"
export const getListings = async (req, res, next) => {
    try {
        const queries = req.query
        const listings = await listingService.getListings(queries)
        return res.status(200).json({
            data: listings
        })
    } catch (err) {
        next(err)
    }
}

export const getListingById = async (req, res, next) => {
    try {
        const listing = await listingService.getListingById(req.params.id)
        return res.status(200).json({
            data: listing
        })
    } catch (err) {
        next(err)
    }
}
export const createListing = async (req, res, next) => {
    try {
        const body = req.body
        const newListing = await listingService.createListing(body)
        return res.status(201).json({
            message: "Listing created successfully.",
            data: newListing
        })
    } catch (err) {
        next(err)
    }
}
export const updateListing = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedMovie = await listingService.updateListing(id, body)
        return res.status(200).json({
            message: "Listing updated successfully.",
            data: updatedMovie
        })
    } catch (err) {
        next(err)
    }
}
export const deleteListing = async (req, res, next) => {
    try {
        const id = req.params.id
        const listing = await listingService.deleteListing(id)
        if (!listing) {
            return res.status(404).json({ message: "Listing not found." })
        }
        return res.status(204).send()
    } catch (err) {
        next(err)
    }
}
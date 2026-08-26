
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
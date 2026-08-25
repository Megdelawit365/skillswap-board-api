
import * as listingService from "../services/listingServices.js"
export default getListings = async (req, res) => {
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
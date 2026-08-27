
export const validateListing = (req, res, next) => {
    // since responses are not added when listing is created, its not included

    const { type, skills } = req.body
    if (type == undefined || typeof (type) != "string" || !["offering,wanting"].includes(type.toLowerCase())) {
        res.status(400).json({
            message: "Type is missing or invalid."
        })
    }

    if (skills == undefined || skills == []) {
        res.status(400).json({
            message: "Skills are required."
        })
    }

    // skills is an array of skill ids
    for (const s of skills) {
        if (typeof (s) != "number") {
            res.status(400).json({
                message: "Skills must contain numeric Ids."
            })
        }
    }

    next()

}

export const validateResponse = (req, res, next) => {
    const { content, listingId } = req.body
    if (content == undefined || content == " ") {
        res.status(400).json({
            message: "Response content cannot be empty."
        })
    }

    if (listingId == undefined || typeof (listingId) != "numeric") {
        res.status(400).json({
            message: "Listing id is missing or invalid."
        })
    }

    next()
}
export const validateListingUpdate = (req, res, next) => {
    const body = req.body
    const allowedFields = ["type", "skills"]
    for (const [k, v] in Object.entries(body)) {
        if (!allowedFields.includes(k)) {
            return res.status(400).json({
                message: `${k} is not an editable field.`
            })
        }
    }

    if (body.type) {
        if (typeof (type) != "string" || type.trim() == "" || !["offering,wanting"].includes(type.toLowerCase())) {
            return res.status(400).json({
                message: "Type is missing or invalid."
            })
        }
    }

    if (body.skills) {
        if (skills == []) {
            return res.status(400).json({
                message: "Skills cannot be empty."
            })
        }
    }
}
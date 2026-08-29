export const validateListingUpdate = (req, res, next) => {
    const body = req.body
    const allowedFields = ["type", "skills"]

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({
            message: "No editable fields found."
        })
    }

    for (const [k, v] of Object.entries(body)) {
        if (!allowedFields.includes(k)) {
            return res.status(400).json({
                message: `${k} is not an editable field.`
            })
        }
    }

    if (body.type != undefined) {
        if (typeof (body.type) != "string" || body.type.trim() == "" || !["offering", "wanting"].includes(body.type.trim().toLowerCase())) {
            return res.status(400).json({
                message: "Type is missing or invalid."
            })
        }
    }

    if (body.skills != undefined) {
        if (!Array.isArray(body.skills) || body.skills.length === 0) {
            return res.status(400).json({
                message: "Skills cannot be empty."
            })
        }
        for (const skillId of body.skills) {
            if (typeof skillId !== "number" || isNaN(skillId)) {
                return res.status(400).json({
                    message: "Skills array must contain numeric IDs."
                });
            }
        }
    }

    next()
}
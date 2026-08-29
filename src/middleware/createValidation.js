
export const validateListing = (req, res, next) => {
    // since responses are not added when listing is created, its not included

    const { type, skills, description, email } = req.body
    if (type == undefined || typeof (type) != "string" || !["offering", "wanting"].includes(type.trim().toLowerCase())) {
        return res.status(400).json({
            message: "Type is missing or invalid."
        })
    }

    if (skills == undefined || !Array.isArray(skills) || skills.length === 0) {
        return res.status(400).json({
            message: "Skills are required."
        })
    }

    if (!description || typeof (description) != "string" || description.trim() == "") {
        return res.status(400).json({
            message: "Description is missing or invalid."
        })
    }
    if (!email || typeof (email) != "string" || email.trim() == "") {
        return res.status(400).json({
            message: "Email is missing or invalid."
        })
    }

    // skills is an array of skill ids
    for (const s of skills) {
        if (typeof (s) != "number") {
            return res.status(400).json({
                message: "Skills must contain numeric Ids."
            })
        }
    }

    next()

}

export const validateResponse = (req, res, next) => {
    const { content } = req.body
    if (content == undefined || content.trim() == "") {
        return res.status(400).json({
            message: "Response content cannot be empty."
        })
    }

    next()
}

export const validateSkill = (req, res, next) => {
    const { name } = req.body
    if (name == undefined || name.trim() == "") {
        return res.status(400).json({
            message: "Skill name cannot be empty."
        })
    }

    next()
}
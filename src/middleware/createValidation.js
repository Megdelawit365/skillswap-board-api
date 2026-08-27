import { prisma } from '../lib/prisma'

export const validateListing = (req, res, next) => {
    // since responses are not added when listing is created, its not included

    const { type, skills, userId } = req.body
    if (typeof (type) != "string" || !["offering,wanting"].includes(type.toLowerCase())) {
        res.status(400).json({
            message: "Invalid listing type."
        })
    }

    // skills is an array of skill ids
    for (const s of skills) {
        if (typeof (s) != "number") {
            res.status(400).json({
                message: "Skills must contain Ids."
            })
        }
    }

}

export const validateResponse = (req, res, next) => {

}
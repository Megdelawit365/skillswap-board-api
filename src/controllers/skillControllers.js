
import * as skillServices from "../services/skillServices.js"
export const getSkills = async (req, res, next) => {
    try {
        const skills = await skillServices.getSkills()
        return res.status(200).json({
            data: skills
        })
    } catch (err) {
        next(err)
    }
}

export const createSkill = async (req, res, next) => {
    try {
        const skill = await skillServices.createSkill(req.body.name)
        return res.status(200).json({
            data: skill
        })
    } catch (err) {
        next(err)
    }
}
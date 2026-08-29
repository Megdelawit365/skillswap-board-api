
import * as skillServices from "../services/skillServices.js"
export const getSkills = async (req, res) => {
    try {
        const skills = await skillServices.getSkills()
        return res.status(200).json({
            data: skills
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}

export const createSkill = async (req, res) => {
    try {
        const skill = await skillServices.createSkill(req.body.name)
        return res.status(200).json({
            data: skill
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}

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
import * as healthService from "../services/healthServices.js"
export const checkHealth = async (req, res) => {
    try {
        const health = await healthService.checkHealth()
        res.status(200).json(health)
    } catch (err) {
        res.status(500).json({
            status: "ERROR",
            database: "Disonnected",
            timestamp: new Date().toISOString(),
            error: err.message
        })
    }
}
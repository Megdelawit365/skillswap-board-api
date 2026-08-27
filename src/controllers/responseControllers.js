import * as responseService from "../services/responseServices.js"

export const getResponses = async (req, res) => {
    try {
        const responses = await responseService.getResponses(req.params.id)
        return res.status(200).json({
            data: responses
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
export const createResponses = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params;
        const newResponse = await responseService.createResponse(id, body)
        return res.status(201).json({
            message: "Response added successfully.",
            data: newResponse
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error." })
    }
}
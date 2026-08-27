export const validateId = (req, res, next) => {
    const id = Number(req.params.id)
    if (isNaN(id) || typeof (id) != "number" || id <= 0) {
        return res.status(400).json({
            message: "Invalid Id."
        })
    }
    next()
}
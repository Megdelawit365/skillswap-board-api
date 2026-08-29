export const errorHandler = (err, req, res, next) => {

    if (err.code === 'P2002') {
        return res.status(409).json({
            message: "Record already exists."
        });
    }

    if (err.code === 'P2025') {
        return res.status(404).json({
            message: "Record not found."
        });
    }

    if (err.code === "P2003") {
        return res.status(400).json({
            message: "Referenced Id not found."
        });
    }

    return res.status(500).json({
        message: "Internal server error."
    });

};
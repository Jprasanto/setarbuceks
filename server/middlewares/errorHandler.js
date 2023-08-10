const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") {
        console.log(err, "error dari errorHandler")
    }
    let statusCode = 500
    let message = "Internal Server Error"
    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            const errors = err.errors.map(el => {
                return el.message
            })
            statusCode = 400
            message = errors
            break
        case "ValidationError":
            statusCode = 400
            message = err.message
            break
        case "Please login first":
            statusCode = 401
            message = "Please login first"
            break
        case "Error invalid username or email or password":
            statusCode = 401
            message = "Error invalid username or email or password"
            break
        case "error not found":
            statusCode = 404
            message = "error not found"
            break
        case "Not Authorized":
            statusCode = 403
            message = "Not Authorized"
            break
        case "JsonWebTokenError":
            statusCode = 401
            message = "Please login first"
            break
    }

    res.status(statusCode).json({
        statusCode: statusCode,
        message: message
    })
};

module.exports = errorHandler
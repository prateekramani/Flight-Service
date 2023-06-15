


const { StatusCodes } = require("http-status-codes");
const {errorResponse , successResponse} = require("./../utils/common");
const AppError = require("../utils/errors/app-error");


function validateRequest(req, res, next) {

    if (req.body.name && req.body.code && req.body.cityId)
    {
        next();
    }
    else {
        errorResponse.msg = "Something went wrong while creating airport";
    var responseError = []

    if (!req.body.name) {
        responseError.push("Name not found.");
    }
    if (!req.body.code) {
        responseError.push("Code not found.");
    }
    if (!req.body.cityId) {
        responseError.push("City ID not found.");
    }

    errorResponse.error = new AppError(responseError , StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
}

module.exports = {
    validateRequest
}



const { StatusCodes } = require("http-status-codes");
const {errorResponse , successResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");


function validateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.msg = "Something went wrong while creating airplane";
        errorResponse.error = new AppError(["Model Number not found."] , StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    validateRequest
}
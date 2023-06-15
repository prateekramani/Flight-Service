


const { StatusCodes } = require("http-status-codes");
const {errorResponse , successResponse} = require("./../utils/common");
const AppError = require("../utils/errors/app-error");


function validateRequest(req, res, next) {

    if (req.body.flightNumber && req.body.airplaneId && req.body.arrivalAirportId && 
        req.body.departureAirportId && req.body.arrivalTime && req.body.departureAirportId &&
        req.body.departureTime && req.body.price && req.body.totalSeats)
    {
        next();
    }
    else{

        errorResponse.msg = "Something went wrong while creating flight";
    var responseError = []

    if (!req.body.flightNumber) {
        responseError.push("Flight Number not found.");
    }
    if (!req.body.airplaneId) {
        responseError.push("Airplane ID not found.");
    }
    if (!req.body.arrivalAirportId) {
        responseError.push("Arrival Airport ID not found.");
    }
    if (!req.body.departureAirportId) {
        responseError.push("Departure Airport ID not found.");
    }
    if (!req.body.arrivalTime) {
        responseError.push("Arrival Time not found.");
    }
    if (!req.body.departureTime) {
        responseError.push("Departure Time not found.");
    }
    if (!req.body.price) {
        responseError.push("Price not found.");
    }
    if (!req.body.totalSeats) {
        responseError.push("Seats not found.");
    }

    errorResponse.error = new AppError(responseError , StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);

    }

    
}

module.exports = {
    validateRequest
}
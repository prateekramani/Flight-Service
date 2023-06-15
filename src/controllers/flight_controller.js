

const { FlightService } = require("../services")
const { StatusCodes } = require("http-status-codes")
const { errorResponse , successResponse } = require("../utils/common");


// POST : / flights
// req body : {name  : "IGI" , code : "DEL" , address : "abc" , cityId : 1 }

async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureAirportId : req.body.departureAirportId, 
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        })
        successResponse.msg = "Successfully created an Airport" ;
        successResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        errorResponse.msg = "Something went wrong while creating Airport" ;
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}



module.exports = {
    createFlight
}
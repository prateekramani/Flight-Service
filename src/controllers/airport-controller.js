

const { AirportService } = require("../services")
const { StatusCodes } = require("http-status-codes")
const { errorResponse , successResponse } = require("../utils/common");


// POST : / airport
// req body : {name  : "IGI" , code : "DEL" , address : "abc" , cityId : 1 }

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            address: req.body.address,
            code : req.body.code,
            cityId : req.body.cityId 
        })
        successResponse.msg = "Successfully created an Airport" ;
        successResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        errorResponse.msg = "Something went wrong while creating Airport" ;
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}


// GET : / airports
// req body : {}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        successResponse.data = airports;
        return res.status(StatusCodes.OK).json(successResponse);

    } catch (error) {
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}


// GET : /airport/:id
// req body : {}

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        successResponse.data = airport;
        return res.status(StatusCodes.OK).json(successResponse);

    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }

}


// DELETE : /airport/:id
// req body : {}

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        successResponse.data = airport;
        return res.status(StatusCodes.OK).json(successResponse);

    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport
}
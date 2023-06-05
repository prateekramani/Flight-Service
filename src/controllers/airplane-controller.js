

const { AirplaneService } = require("../services")
const { StatusCodes } = require("http-status-codes")
const { errorResponse , successResponse } = require("../utils/common");


// POST : / airplane
// req body : {modelNumber  : "airbus20" , capacity : 200}

async function createAirplane(req, res) {
    try {
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        // console.log(airplane);
        successResponse.msg = "Successfully created an Airplane" ;
        successResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        errorResponse.msg = "Something went wrong while creating Airplane" ;
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}

module.exports = {
    createAirplane
}


const { CityService } = require("../services")
const { StatusCodes } = require("http-status-codes")
const {errorResponse , successResponse} = require("../utils/common")


async function createCity(req, res) {
    try {
        
        const city = await CityService.createCity({
            name: req.body.name,
        })
        successResponse.msg = "Successfully created an City" ;
        successResponse.data = city;
        return res.status(StatusCodes.CREATED).json(successResponse);

    } catch (error) {
        errorResponse.msg = "Something went wrong while creating City" ;
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}

module.exports = {
    createCity
}
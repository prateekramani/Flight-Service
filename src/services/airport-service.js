



const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const airportrepository = new AirportRepository();

async function createAirport(data){
    try{
        const airport = await airportrepository.create(data);
        return airport;
    }
    catch(error){
        if (error.name == "SequelizeValidationError")
        {
            let explanation  = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError("Cannot create a new Airport object" , StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function getAirports(){
    try {
        const airports = await airportrepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError("Cannot fetch data of all Airport" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirport(id){
    try {
        const airport = await airportrepository.get(id)
        return airport;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("Cannot find Airport with given ID" , StatusCodes.NOT_FOUND);
        }
        throw new AppError("Cannot find Airport" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function destroyAirport(id){
    try {
        const airport = await airportrepository.destroy(id)
        return airport;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("Cannot Delete Airport with given ID" , StatusCodes.NOT_FOUND);
        }
        throw new AppError("Cannot Delete Airport" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}

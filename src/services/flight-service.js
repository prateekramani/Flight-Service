



const { StatusCodes } = require("http-status-codes");
const { FlightRepositories } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const flightrepository = new FlightRepositories();

async function createFlight(data){
    try{
        console.log(data);
        const flight = await flightrepository.create(data);
        return flight;
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
        
        throw new AppError("Cannot create a new Flight object" , StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


module.exports = {
    createFlight
}

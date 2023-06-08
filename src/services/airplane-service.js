



const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const airplanerepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplanerepository.create(data);
        return airplane;
    }
    catch(error){
        console.log(error);
        if (error.name == "SequelizeValidationError")
        {
            let explanation  = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log("explantion" , explanation);
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError("Cannot create a new Airplane object" , StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


async function getAirplanes(){
    try {
        const airplanes = airplanerepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Cannot fetch data of all Airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}

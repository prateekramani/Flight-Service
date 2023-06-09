



const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const cityrepository = new CityRepository();



async function createCity(data){
    try{
        const city = await cityrepository.create(data);
        return city;
    }
    catch(error){
        if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError")
        {
            let explanation  = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError("Cannot create a new city object" , StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

// async function createAirplane(data){
//     try{
//         const airplane = await airplanerepository.create(data);
//         return airplane;
//     }
//     catch(error){
//         if (error.name == "SequelizeValidationError")
//         {
//             let explanation  = [];
//             error.errors.forEach((err) => {
//                 explanation.push(err.message);
//             });
//             throw new AppError(explanation , StatusCodes.BAD_REQUEST);
//         }
        
//         throw new AppError("Cannot create a new Airplane object" , StatusCodes.INTERNAL_SERVER_ERROR);

//     }
// }

// async function getAirplanes(){
//     try {
//         const airplanes = await airplanerepository.getAll();
//         return airplanes;
//     } catch (error) {
//         throw new AppError("Cannot fetch data of all Airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }


// async function getAirplane(id){
//     try {
//         const airplane = await airplanerepository.get(id)
//         return airplane;
//     } catch (error) {
//         if (error.statusCode == StatusCodes.NOT_FOUND)
//         {
//             throw new AppError("Cannot find Airplane with given ID" , StatusCodes.NOT_FOUND);
//         }
//         throw new AppError("Cannot find Airplane" , StatusCodes.INTERNAL_SERVER_ERROR)
//     }
// }


// async function destroyAirplane(id){
//     try {
//         const airplane = await airplanerepository.destroy(id)
//         return airplane;
//     } catch (error) {
//         if (error.statusCode == StatusCodes.NOT_FOUND)
//         {
//             throw new AppError("Cannot Delete Airplane with given ID" , StatusCodes.NOT_FOUND);
//         }
//         throw new AppError("Cannot Delete Airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

module.exports = {
    createCity
}

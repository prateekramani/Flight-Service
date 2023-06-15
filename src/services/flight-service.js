



const { StatusCodes } = require("http-status-codes");
const { FlightRepositories } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");


const flightrepository = new FlightRepositories();

async function createFlight(data) {
    try {
        console.log(data);
        const flight = await flightrepository.create(data);
        return flight;
    }
    catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError("Cannot create a new Flight object", StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


async function getAllFlights(query) {
    var customFilter = {};
    let sortFilter = [];
    // trips = MUM-DEL
    if (query.trips) {
        var [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId ;
        customFilter.arrivalAirportId = arrivalAirportId ;
        // check if both are same
    }

    // price = 100-100000
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-")
        customFilter.price = {
            [Op.between] : [minPrice , (maxPrice == undefined) ? 200000 : maxPrice ]
        }
    }

    if (query.tripdate){
        customFilter.departureTime ={
            [Op.gte] : [query.tripdate]
        }
    }

    //travellers=200
    if (query.travellers) {
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }

    if (query.sort) {
        const params = query.sort.split(",");
        const sortFilters = params.map(param => param.split("_"))
        sortFilter = sortFilters
    }



    try {   
        const flights = await flightrepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        throw new AppError("Cannot fetch data of all Flights" , StatusCodes.BAD_REQUEST);
    }
}


module.exports = {
    createFlight,
    getAllFlights
}
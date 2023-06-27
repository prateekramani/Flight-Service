

const CrudRepository = require("./crud-repository")
const { Flight , Airplane, Airport, City } = require("../models")
const { Sequelize } = require("sequelize");
const db = require("../models");
const {addRowLockOnFlights} = require("./queries")

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter , sort) {
        const response = await Flight.findAll({
            where: filter,
            order : sort,
            include : [{
                model : Airplane,
                as: "airplaneDetail" // direclty doing a join over Primary Key of Airplane
            },
            {
                model : Airport,
                on : {
                    col1 : Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=" ,Sequelize.col("arrivalAirport.code"))
                },
                as: "arrivalAirport", // doing a join over arrivalAirport (Airport) .code
                include : {
                    model : City,
                }
            },
            {
                model : Airport,
                on : {
                    col1 : Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" ,Sequelize.col("departureAirport.code")),
                },
                as: "departureAirport",
                include : {
                    model : City,
                }
                }
            ]
            //alias being set in Model-Flight
            // with the help of Alias , Sequqlize   recognizes which association we are referring to 
        })
        return response;
    }


    async updateRemainingSeats(flightId, seats, dec = true ) {

        await db.sequelize.query(addRowLockOnFlights(flightId)); // this will put a row lock

        const flight = await Flight.findByPk(flightId);
        if (parseInt(dec)) {  
            const response = await flight.decrement('totalSeats' , {by : seats});
        }
        else {
            const response = await flight.increment('totalSeats' , {by : seats});
        }
        return flight;
    }
}

module.exports = FlightRepository; 
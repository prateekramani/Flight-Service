


const express = require("express");
const { AirportController } = require("../../controllers")
const  { AirportMiddlewares } = require("../../middlewares")
const router = express.Router();


// referring to /api/v1/airports POST
router.post("/" , AirportMiddlewares.validateRequest, AirportController.createAirport);

// /api/v1/airports GET
router.get("/" , AirportController.getAirports)

// /api/v1/airports/:id GET
router.get("/:id" , AirportController.getAirport)


router.delete("/:id" , AirportController.destroyAirport)


module.exports = router;
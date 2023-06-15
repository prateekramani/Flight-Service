


const express = require("express");
const { FlightController } = require("../../controllers")
const  { FlightMiddlewares } = require("../../middlewares")
const router = express.Router();


// referring to /api/v1/flights POST
router.post("/" , FlightMiddlewares.validateRequest, FlightController.createFlight);

// /api/v1/flights?trips=MUM-GET GET
router.get("/" , FlightController.getAllFlights);

module.exports = router;
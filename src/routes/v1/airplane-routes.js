


const express = require("express");
const { AirplaneController } = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares");
const { AirplaneService } = require("../../services");
const router = express.Router();


// referring to /api/v1/airplanes POST
router.post("/" , AirplaneMiddlewares.validateRequest, AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get("/" , AirplaneController.getAirplanes)


module.exports = router;
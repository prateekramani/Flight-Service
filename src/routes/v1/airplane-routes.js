


const express = require("express");
const { AirplaneController } = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares")
const router = express.Router();


// referring to /api/v1/airplanes POST
router.post("/" , AirplaneMiddlewares.validateRequest, AirplaneController.createAirplane);

module.exports = router;
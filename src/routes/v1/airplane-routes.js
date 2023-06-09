


const express = require("express");
const { AirplaneController } = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();


// referring to /api/v1/airplanes POST
router.post("/" , AirplaneMiddlewares.validateRequest, AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get("/" , AirplaneController.getAirplanes)

// /api/v1/airplanes/:id GET
router.get("/:id" , AirplaneController.getAirplane)


router.delete("/:id" , AirplaneController.destroyAirplane)


module.exports = router;
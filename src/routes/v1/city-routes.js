


const express = require("express");
const { CityController } = require("../../controllers")
const { CityMiddlewares } = require("../../middlewares")

const router = express.Router();


// referring to /api/v1/city POST
router.post("/" , CityMiddlewares.validateRequest , CityController.createCity);



module.exports = router;
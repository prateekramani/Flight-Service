


const express = require("express");
const { CityController } = require("../../controllers")
const router = express.Router();


// referring to /api/v1/city POST
router.post("/" ,  CityController.createCity);



module.exports = router;
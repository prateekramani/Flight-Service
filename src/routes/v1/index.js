

const express = require('express')

const router = express.Router();

const {InfoController} = require("../../controllers");

const airplaneRoutes = require("./airplane-routes")

const cityRoutes = require("./city-routes")



router.get("/info", InfoController.info)
// since above line is a last middleware to be called , so it becomes a controller , so we will 
// call the controller from here

router.use("/airplanes" , airplaneRoutes)


router.use("/city" ,cityRoutes)

module.exports = router;
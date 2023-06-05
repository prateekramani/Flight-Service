

const express = require('express')

const router = express.Router();

const {InfoController} = require("../../controllers");

const airplaneRoutes = require("./airplane-routes")



router.get("/info", InfoController.info)
// since above line is a last middleware to be called , so it becomes a controller , so we will 
// call the controller from here

router.use("/airplanes" , airplaneRoutes)

module.exports = router;
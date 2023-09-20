const express = require("express")
const router = express.Router()

const RrController = require("../controller/RR_controller")

/**
 * APP ROUTES
 */

router.get("/api/", RrController.getHome)
const express = require("express");

const router = express.Router();

const controller = require("../controllers/restaurantsController");

router.get("/", controller.getSortedRestaurants);
router.get("/cuisine/:cuisineName", controller.getRestaurantsByCuisine);
router.get("/Delicatessen", controller.getRestaurantsByDelicatessen);

module.exports = router;

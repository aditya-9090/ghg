const express = require("express");
const router = express.Router();
const controller = require("../controllers/electricityGridFactorController");

// Create
router.post("/add", controller.createElectricityGridFactor);

// Read all
router.get("/", controller.getAllElectricityGridFactors);

// Get by cityRef via query
router.get("/by-city", controller.getByCity);

// Update by id via query
router.put("/update", controller.updateElectricityGridFactor);

// Delete by id via query
router.delete("/delete", controller.deleteElectricityGridFactor);

module.exports = router;

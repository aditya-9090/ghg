const express = require("express");
const router = express.Router();
const emissionController = require("../controllers/emissionDataController");

// CREATE
router.post("/add", emissionController.createEmissionData);

// GET ALL
router.get("/all", emissionController.getAllEmissionData);

// GET BY ID (query)
router.get("/get", emissionController.getEmissionDataById);


// Filter by cityRef and/or treatmentMethod
router.get("/filter", emissionController.getFilteredEmissionData);

// UPDATE BY ID (query)
router.put("/update", emissionController.updateEmissionData);

// DELETE BY ID (query)
router.delete("/delete", emissionController.deleteEmissionData);

module.exports = router;

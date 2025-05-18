const express = require("express");
const router = express.Router();
const landfillController = require("../controllers/landfillController"); // Adjust path as needed

// Create a new Landfill document
router.post("/add", landfillController.createLandfill);

// Read: Get Landfill documents filtered by cityRef (Required in query)
router.get("/get", landfillController.getLandfills);

// Update: Update an existing Landfill document using query parameter "landfillId"
router.put("/update", landfillController.updateLandfill);

// Delete: Remove a Landfill document using query parameter "landfillId"
router.delete("/delete", landfillController.deleteLandfill);

module.exports = router;

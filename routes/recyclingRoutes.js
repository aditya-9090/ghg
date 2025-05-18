const express = require("express");
const router = express.Router();
const recyclingController = require("../controllers/recyclingController"); // Adjust path as needed

// Create a new Recycling document
router.post("/add", recyclingController.createRecycling);

// Read: Get Recycling documents filtered by cityRef (Required in query)
router.get("/get", recyclingController.getRecyclings);

// Update: Update an existing Recycling document using query parameter "recyclingId"
router.put("/update", recyclingController.updateRecycling);

// Delete: Remove a Recycling document using query parameter "recyclingId"
router.delete("/delete", recyclingController.deleteRecycling);

module.exports = router;

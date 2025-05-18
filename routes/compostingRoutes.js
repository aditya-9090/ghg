// compostingRoutes.js
const express = require("express");
const router = express.Router();
const compostingController = require("../controllers/compostingController"); // Adjust the path as needed

// Create a new Composting document
router.post("/add", compostingController.createComposting);

// Read: Get Composting documents filtered by cityRef (Required in query)
router.get("/get", compostingController.getCompostings);

// Update: Update an existing Composting document using query parameter "compostingId"
router.put("/update", compostingController.updateComposting);

// Delete: Remove a Composting document using query parameter "compostingId"
router.delete("/delete", compostingController.deleteComposting);

module.exports = router;

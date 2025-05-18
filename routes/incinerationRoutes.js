// incinerationRoutes.js
const express = require("express");
const router = express.Router();
const incinerationController = require("../controllers/incinerationController"); // Adjust the path as needed

// Create a new Incineration document
router.post("/add", incinerationController.createIncineration);

// Read: Get Incineration documents filtered by cityRef (Required in query)
router.get("/get", incinerationController.getIncinerations);

// Update: Update an existing Incineration document using query parameter "incinerationId"
router.put("/update", incinerationController.updateIncineration);

// Delete: Remove an Incineration document using query parameter "incinerationId"
router.delete("/delete", incinerationController.deleteIncineration);

module.exports = router;

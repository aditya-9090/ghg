const express = require("express");
const router = express.Router();
const generalController = require("../controllers/generalController");

// POST
router.post("/create", generalController.createGeneral);

// GET all
router.get("/all", generalController.getAllGeneral);

// GET by id (using query)
router.get("/get", generalController.getGeneralById);

// PUT (update using query)
router.put("/update", generalController.updateGeneral);

// DELETE (using query)
router.delete("/delete", generalController.deleteGeneral);

module.exports = router;

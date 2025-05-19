const express = require("express");
const router = express.Router();
const wasteCtrl = require("../controllers/wasteCompositionController");

router.post("/add", wasteCtrl.createWasteComposition);
router.get("/all", wasteCtrl.getAllWasteCompositions);
router.get("/get", wasteCtrl.getByCity);
router.put("/update", wasteCtrl.updateWasteComposition);
router.delete("/delete", wasteCtrl.deleteWasteComposition);

module.exports = router;

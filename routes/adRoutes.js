const express = require("express");
const router = express.Router();
const adController = require("../controllers/adController");

router.post("/add", adController.createAd);
router.get("/get", adController.getAdsByCity);      // ?cityRef=...
router.put("/update", adController.updateAd);          // ?id=...
router.delete("/delete", adController.deleteAd);       // ?id=...

module.exports = router;

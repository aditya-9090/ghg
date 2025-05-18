const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city.controller");

router.post("/add", cityController.createCity);
router.get("/get", cityController.getAllCities);
// Use query ?id=cityId for update and delete
router.put("/update", cityController.updateCity);
router.delete("/delete", cityController.deleteCity);

module.exports = router;

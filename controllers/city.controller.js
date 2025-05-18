// controllers/cityController.js
const City = require("../models/City");

// Create a new city
exports.createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all cities
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update city by query id
exports.updateCity = async (req, res) => {
  try {
    const cityId = req.query.id;
    if (!cityId) {
      return res.status(400).json({ error: "City ID is required in query" });
    }

    const updatedCity = await City.findByIdAndUpdate(cityId, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCity) {
      return res.status(404).json({ error: "City not found" });
    }

    res.status(200).json(updatedCity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete city by query id
exports.deleteCity = async (req, res) => {
  try {
    const cityId = req.query.id;
    if (!cityId) {
      return res.status(400).json({ error: "City ID is required in query" });
    }

    const deletedCity = await City.findByIdAndDelete(cityId);

    if (!deletedCity) {
      return res.status(404).json({ error: "City not found" });
    }

    res.status(200).json({ message: "City deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

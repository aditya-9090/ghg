const ElectricityGridFactor = require("../models/electricityGridFactor");

// Create
exports.createElectricityGridFactor = async (req, res) => {
  try {
    const newFactor = new ElectricityGridFactor(req.body);
    const saved = await newFactor.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all
exports.getAllElectricityGridFactors = async (req, res) => {
  try {
    const data = await ElectricityGridFactor.find().populate("cityRef");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by cityRef (query)
exports.getByCity = async (req, res) => {
  try {
    const { cityRef } = req.query;
    if (!cityRef) return res.status(400).json({ error: "cityRef is required in query" });

    const data = await ElectricityGridFactor.findOne({ cityRef }).populate("cityRef");
    if (!data) return res.status(404).json({ error: "Data not found for this cityRef" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update by id (query)
exports.updateElectricityGridFactor = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required in query" });

    const updated = await ElectricityGridFactor.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete by id (query)
exports.deleteElectricityGridFactor = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required in query" });

    const deleted = await ElectricityGridFactor.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Data not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

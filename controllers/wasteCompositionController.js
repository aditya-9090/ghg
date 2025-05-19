const WasteComposition = require("../models/WasteComposition");

// Create
exports.createWasteComposition = async (req, res) => {
  try {
    const newComposition = new WasteComposition(req.body);
    const saved = await newComposition.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read All
exports.getAllWasteCompositions = async (req, res) => {
  try {
    const data = await WasteComposition.find().populate("cityRef");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by CityRef (via query)
exports.getByCity = async (req, res) => {
  try {
    const { cityRef } = req.query;
    if (!cityRef) return res.status(400).json({ error: "cityRef is required in query" });

    const data = await WasteComposition.find({ cityRef }).populate("cityRef");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update by ID (via query)
exports.updateWasteComposition = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required in query" });

    const updated = await WasteComposition.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete by ID (via query)
exports.deleteWasteComposition = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required in query" });

    const deleted = await WasteComposition.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Data not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

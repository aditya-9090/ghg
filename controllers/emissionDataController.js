const EmissionData = require("../models/emissionData.model");

// CREATE
exports.createEmissionData = async (req, res) => {
  try {
    const newData = await EmissionData.create(req.body);
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getAllEmissionData = async (req, res) => {
  try {
    const data = await EmissionData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET by cityRef and treatmentMethod using query
exports.getFilteredEmissionData = async (req, res) => {
  try {
    const { cityRef, treatmentMethod } = req.query;

    const filter = {};
    if (cityRef) filter.cityRef = cityRef;
    if (treatmentMethod) filter.treatmentMethod = treatmentMethod;

    const data = await EmissionData.find(filter);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID (using query)
exports.getEmissionDataById = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await EmissionData.findById(id);
    if (!data) return res.status(404).json({ message: "Data not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE BY ID (using query)
exports.updateEmissionData = async (req, res) => {
  try {
    const { id } = req.query;
    const updated = await EmissionData.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Data not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE BY ID (using query)
exports.deleteEmissionData = async (req, res) => {
  try {
    const { id } = req.query;
    const deleted = await EmissionData.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

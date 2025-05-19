const General = require("../models/general");

// CREATE
exports.createGeneral = async (req, res) => {
  try {
    const newData = await General.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ALL
exports.getAllGeneral = async (req, res) => {
  try {
    const allData = await General.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ BY ID (using query: ?id=...)
exports.getGeneralById = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await General.findById(id);
    if (!data) return res.status(404).json({ message: "General data not found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE BY ID (using query: ?id=...)
exports.updateGeneral = async (req, res) => {
  try {
    const { id } = req.query;
    const updated = await General.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "General data not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE BY ID (using query: ?id=...)
exports.deleteGeneral = async (req, res) => {
  try {
    const { id } = req.query;
    const deleted = await General.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "General data not found" });
    res.status(200).json({ message: "General data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

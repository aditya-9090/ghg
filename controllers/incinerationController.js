// incinerationController.js
const Incineration = require('../models/incineration'); // Adjust the path if needed

// CREATE – Add a new Incineration document
exports.createIncineration = async (req, res) => {
  try {
    const newIncineration = await Incineration.create(req.body);
    res.status(201).json(newIncineration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ – Get Incineration documents
// If query contains "incinerationId", return that single document,
// otherwise return all documents, and support filtering by cityRef.
exports.getIncinerations = async (req, res) => {
  try {
    const { cityRef } = req.query;
    
    if (!cityRef) {
      return res.status(400).json({ error: "Query parameter 'cityRef' is required." });
    }

    const incinerations = await Incineration.find({ cityRef }).populate("cityRef");

    return res.status(200).json(incinerations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE – Update an Incineration document by ID, provided as query parameter
exports.updateIncineration = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'incinerationId' is required." });
    }
    const updatedIncineration = await Incineration.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate("cityRef");

    if (!updatedIncineration) {
      return res.status(404).json({ error: "Incineration record not found." });
    }
    res.status(200).json(updatedIncineration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE – Remove an Incineration document by ID, provided as query parameter
exports.deleteIncineration = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'incinerationId' is required." });
    }
    const deletedIncineration = await Incineration.findByIdAndDelete(id);
    if (!deletedIncineration) {
      return res.status(404).json({ error: "Incineration record not found." });
    }
    res.status(200).json({ message: "Incineration record deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

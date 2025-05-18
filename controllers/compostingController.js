// compostingController.js
const Composting = require('../models/composting');

// CREATE – Add a new Composting document
exports.createComposting = async (req, res) => {
  try {
    const newComposting = await Composting.create(req.body);
    res.status(201).json(newComposting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ – Fetch Composting document
exports.getCompostings = async (req, res) => {
  try {
    const { cityRef } = req.query;
    
    // Ensure cityRef is provided, otherwise return an error
    if (!cityRef) {
      return res.status(400).json({ error: "Query parameter 'cityRef' is required." });
    }

    // Find all Composting records that match the provided cityRef
    const compostings = await Composting.find({ cityRef }).populate("cityRef");

    return res.status(200).json(compostings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE – Update an existing Composting document using query parameter "compostingId"
exports.updateComposting = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'compostingId' is required." });
    }
    
    const updatedComposting = await Composting.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate("cityRef");
    
    if (!updatedComposting) {
      return res.status(404).json({ error: "Composting record not found." });
    }
    
    res.status(200).json(updatedComposting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE – Remove a Composting document using query parameter "compostingId"
exports.deleteComposting = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'compostingId' is required." });
    }
    
    const deletedComposting = await Composting.findByIdAndDelete(id);
    if (!deletedComposting) {
      return res.status(404).json({ error: "Composting record not found." });
    }
    
    res.status(200).json({ message: "Composting record deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Recycling = require("../models/recycling"); // Adjust path as needed

// CREATE – Add a new Recycling document
exports.createRecycling = async (req, res) => {
  try {
    const newRecycling = await Recycling.create(req.body);
    res.status(201).json(newRecycling);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ – Get Recycling documents filtered by `cityRef`
exports.getRecyclings = async (req, res) => {
  try {
    const { cityRef } = req.query;

    // Ensure cityRef is provided, otherwise return an error
    if (!cityRef) {
      return res.status(400).json({ error: "Query parameter 'cityRef' is required." });
    }

    // Find all Recycling records that match the provided cityRef
    const recyclings = await Recycling.find({ cityRef }).populate("cityRef");
    return res.status(200).json(recyclings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE – Update an existing Recycling document using query parameter "recyclingId"
exports.updateRecycling = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'recyclingId' is required." });
    }

    const updatedRecycling = await Recycling.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate("cityRef");

    if (!updatedRecycling) {
      return res.status(404).json({ error: "Recycling record not found." });
    }

    res.status(200).json(updatedRecycling);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE – Remove a Recycling document using query parameter "recyclingId"
exports.deleteRecycling = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'recyclingId' is required." });
    }

    const deletedRecycling = await Recycling.findByIdAndDelete(id);
    if (!deletedRecycling) {
      return res.status(404).json({ error: "Recycling record not found." });
    }

    res.status(200).json({ message: "Recycling record deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Landfill = require("../models/landfill"); // Adjust path as needed

// CREATE – Add a new Landfill document
exports.createLandfill = async (req, res) => {
  try {
    const newLandfill = await Landfill.create(req.body);
    res.status(201).json(newLandfill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ – Get Landfill documents filtered by `cityRef`
exports.getLandfills = async (req, res) => {
  try {
    const { cityRef } = req.query;

    // Ensure cityRef is provided, otherwise return an error
    if (!cityRef) {
      return res.status(400).json({ error: "Query parameter 'cityRef' is required." });
    }

    // Find all Landfill records that match the provided cityRef
    const landfills = await Landfill.find({ cityRef }).populate("cityRef");
    return res.status(200).json(landfills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE – Update an existing Landfill document using query parameter "landfillId"
exports.updateLandfill = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'landfillId' is required." });
    }

    const updatedLandfill = await Landfill.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate("cityRef");

    if (!updatedLandfill) {
      return res.status(404).json({ error: "Landfill record not found." });
    }

    res.status(200).json(updatedLandfill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE – Remove a Landfill document using query parameter "landfillId"
exports.deleteLandfill = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'landfillId' is required." });
    }

    const deletedLandfill = await Landfill.findByIdAndDelete(id);
    if (!deletedLandfill) {
      return res.status(404).json({ error: "Landfill record not found." });
    }

    res.status(200).json({ message: "Landfill record deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

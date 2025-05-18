const Ad = require("../models/ad");

// CREATE
exports.createAd = async (req, res) => {
  try {
    const newAd = await Ad.create(req.body);
    res.status(201).json(newAd);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (GET BY cityRef)
exports.getAdsByCity = async (req, res) => {
  try {
    const { cityRef } = req.query;
    if (!cityRef) {
      return res.status(400).json({ error: "cityRef query is required" });
    }

    const ads = await Ad.find({ cityRef }).populate("cityRef");
    res.status(200).json(ads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE (by _id passed as query, body contains update)
exports.updateAd = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Query parameter 'id' is required." });
    }

    // Expecting the complete updated document from the frontend.
    // For example, req.body may include changes in ad_emissions and the entire updated fuelData array.
    const updatedAd = await Ad.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedAd) {
      return res.status(404).json({ error: "Ad not found." });
    }

    return res.status(200).json(updatedAd);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE (by _id passed as query)
exports.deleteAd = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "id query is required" });
    }

    const deletedAd = await Ad.findByIdAndDelete(id);

    if (!deletedAd) {
      return res.status(404).json({ error: "Ad not found" });
    }

    res.status(200).json({ message: "Ad deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

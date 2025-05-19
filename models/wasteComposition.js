const mongoose = require("mongoose");

const wasteCompositionSchema = new mongoose.Schema({
  cityRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true
  },
  composition: {
    type: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("WasteComposition", wasteCompositionSchema);

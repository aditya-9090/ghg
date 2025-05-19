const mongoose = require("mongoose");

const emissionDataSchema = new mongoose.Schema({
    city: { type: String, required: true },
    treatmentMethod: { type: String, required: true },
    ghgType: { type: String, required: true },
    unit: { type: String, required: true },
    value: { type: Number, required: true },
    sourceURL: { type: String, required: true },
    dataQualityScore: { type: Number, min: 1, max: 5, required: true },
    uncertaintyRange: { type: String, required: true },  // e.g., "±5%"
    addedBy: { type: String, required: true },
    description: { type: String },
    cityRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("EmissionData", emissionDataSchema);

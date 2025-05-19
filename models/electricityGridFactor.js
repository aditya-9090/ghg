const mongoose = require("mongoose");

const electricityGridFactorSchema = new mongoose.Schema({
  cityRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  electricity_grid_factor: {
    CO2_kg_eq_kWh: {
      type: Number,
      required: true,
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("ElectricityGridFactor", electricityGridFactorSchema);

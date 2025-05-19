const mongoose = require("mongoose");

const vehicleTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  BC: { type: Number, required: true },
  OC: { type: Number, required: true }
}, { _id: false });

const gasTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  GWP20: { type: Number, required: true },
  GWP100: { type: Number, required: true }
}, { _id: false });

const generalSchema = new mongoose.Schema({
  vehicle_emission_factors: {
    types: [vehicleTypeSchema]
  },
  gwp_factors: {
    types: [gasTypeSchema]
  }
}, { timestamps: true });

module.exports = mongoose.model("General", generalSchema);

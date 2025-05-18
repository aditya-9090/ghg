const mongoose = require('mongoose');

const FuelDataSchema = new mongoose.Schema({
    fuelType: String,
    energyContent_MJ_per_L: Number,
    co2EmissionFactor: Number,
    ch4EmissionFactor: Number,
    n2oEmissionFactor: Number,
    bcEmissionFactor: Number,
    fuelDensity_kg_per_L: Number
});

const LandfillSchema = new mongoose.Schema({
    fuelData: [FuelDataSchema],
    electricityGridFactor: {
        co2_kg_eq_per_kWh: Number
    },
    cityRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
});

module.exports = mongoose.model('Landfill', LandfillSchema);

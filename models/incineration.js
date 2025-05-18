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

const IncinerationTypeSchema = new mongoose.Schema({
    name: String,
    ch4_emission: Number,
    n2o_emission: Number,
    bc_emission: Number
});

const WasteComponentSchema = new mongoose.Schema({
    type: String,
    dryMatterContent: Number,
    totalCarbonContent: Number,
    fossilCarbonFraction: Number,
    oxidationFactor: Number,
    mixedWasteComposition: Number
});

const IncinerationSchema = new mongoose.Schema({
    fuelData: [FuelDataSchema],
    electricityGridFactor: {
        co2_kg_eq_per_kWh: Number
    },
    cityRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
    incinerationEmissions: [IncinerationTypeSchema],
    fossilBasedCo2Emissions: [WasteComponentSchema]
});

module.exports = mongoose.model('Incineration', IncinerationSchema);

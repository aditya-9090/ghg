const mongoose = require("mongoose");


const FuelDataSchema = new mongoose.Schema({
    fuelType: String,
    energyContent_MJ_per_L: Number,
    co2EmissionFactor: Number,
    ch4EmissionFactor: Number,
    n2oEmissionFactor: Number,
    bcEmissionFactor: Number,
    fuelDensity_kg_per_L: Number
});

const adSchema = new mongoose.Schema({
    cityRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
    ad_emissions: {
        IPCC_default_values: {
            CH4_kg_per_ton: { type: Number, required: true },
            N2O_kg_per_ton: { type: Number, required: true }
        }
    },
    fuelData: [FuelDataSchema],

}, { timestamps: true });

module.exports = mongoose.model("Ad", adSchema);



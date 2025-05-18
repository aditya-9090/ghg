// compostingSchema.js
const mongoose = require('mongoose');

// Composting emissions sub-schema
const compostingEmissionsSchema = new mongoose.Schema({
    IPCC_default_values: {
        CH4_kg_per_ton: { type: Number, required: true },
        N2O_kg_per_ton: { type: Number, required: true }
    }
}, { _id: false });

// Fuel data sub-schema
const fuelDataSchema = new mongoose.Schema({
    fuels: [{
        fuel_type: { type: String, required: true },
        energy_content_MJ_per_L: { type: Number, required: true },
        CO2_emission_factor_kg_per_MJ: { type: Number, required: true },
        CH4_emission_factor_kg_per_MJ: { type: Number, required: true },
        N2O_emission_factor_kg_per_MJ: { type: Number, required: true },
        BC_emissions_kg_per_MJ: { type: Number, required: true },
        fuel_density_kg_per_L: { type: Number, required: true }
    }]
}, { _id: false });

// Fertilizer production emissions sub-schema
const fertilizerProductionEmissionsSchema = new mongoose.Schema({
    fertilizers: [{
        fertilizer_type: { type: String, required: true },
        ferti_replaced_kg_per_ton_compost: { type: Number, required: true },
        CO2_emission_g_per_kg_fertilizer: { type: Number, required: true },
        CH4_emission_g_per_kg_fertilizer: { type: Number, required: true },
        N2O_emission_g_per_kg_fertilizer: { type: Number, required: true },
        BC_emission_g_per_kg_fertilizer: { type: Number, required: true },
        CO2_eq_kg_per_kg_fertilizer: { type: Number },
        energy_requirement_MJ_per_kg_fertilizer: { type: Number }
    }]
}, { _id: false });

// Main schema
const compostingSchema = new mongoose.Schema({
    composting_emissions: { type: compostingEmissionsSchema, required: true },
    fuel_data: { type: fuelDataSchema, required: true },
    fertilizer_production_emissions: { type: fertilizerProductionEmissionsSchema, required: true },
    cityRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
});

// Export the model using a meaningful name
module.exports = mongoose.model('Composting', compostingSchema);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());



app.use("/cities", require("./routes/city.routes"));
app.use("/composition", require("./routes/wasteCompositionRoutes"));
app.use("/electricityGridFactors", require("./routes/electricityGridFactorRoutes"));



//form
app.use("/emissionData", require("./routes/emissionDataRoutes"));

//treatment methods
app.use("/ads", require("./routes/adRoutes"));      
app.use("/composting", require("./routes/compostingRoutes"));     
app.use("/incineration", require("./routes/incinerationRoutes"));     
app.use("/landfill", require("./routes/landfillRoutes"));     
app.use("/recycling", require("./routes/recyclingRoutes"));     

//general routes
app.use("/general", require("./routes/generalRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

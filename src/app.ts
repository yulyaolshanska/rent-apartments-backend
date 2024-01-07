import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./server";
import apartmentRoutes from "./routes/apartmentRoutes";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());

connectDB();

app.use("/api/apartments", apartmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

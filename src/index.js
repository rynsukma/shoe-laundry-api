import express from "express";
import dotenv from "dotenv";
import shoeRoutes from "./routes/shoeRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/items", shoeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

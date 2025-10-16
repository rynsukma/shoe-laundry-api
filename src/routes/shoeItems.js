import express from "express";
import { shoeModel } from "../models/shoeModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { status } = req.query;
        const shoes = await shoeModel.getAll(status);
        res.json(shoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

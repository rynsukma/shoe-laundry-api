import express from "express";
import { shoeController } from "../controllers/shoeController.js";

const router = express.Router();

router.get("/", shoeController.getAll);
router.get("/:id", shoeController.getById);
router.post("/", shoeController.create);
router.put("/:id", shoeController.update);
router.delete("/:id", shoeController.remove);

export default router;

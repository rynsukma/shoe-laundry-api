import { ShoeModel } from "../models/shoeModel.js";
export const shoeController = {
    async getAll(req, res) {
        try {
            const { status } = req.query;
            const shoes = await ShoeModel.getAll(status);
            res.json(shoes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const shoe = await ShoeModel.getById(req.params.id);
            res.json(shoe);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const shoe = await ShoeModel.create(req.body);
            res.status(201).json({ message: "Data sepatu berhasil ditambahkan.", shoe });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const updated = await ShoeModel.update(req.params.id, req.body);
            res.json({ message: "Status sepatu berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            const result = await ShoeModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};

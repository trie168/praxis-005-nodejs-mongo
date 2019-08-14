const express = require("express");
const router = express.Router();
const {
    create,
    getAll,
    getDetail,
    update,
    destroy
} = require("../actions/books");

router.post("/", async (req, res) => {
    try {
        let data = await create(req);

        return res.status(200).json({
            status: "success",
            data,
            message: "Book created successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        let data = await getAll();

        return res.send({
            status: "success",
            data,
            message: "Get all book data"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let data = await getDetail(id);

        return res.status(200).json({
            status: "success",
            data,
            message: "Get book detail successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.put("/:id", async (req, res) => {
    let { id } = req.params;
    let updated_data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        fresh: req.body.fresh
    };

    try {
        let data = await update(id, updated_data);

        return res.status(200).json({
            status: "success",
            data,
            message: "Book data updated successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params;

    try {
        let data = await destroy(id);

        return res.status(200).json({
            status: "success",
            data,
            message: "Book data deleted successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

module.exports = router;

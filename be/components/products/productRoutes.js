const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, addProduct } = require("./productController");
const authMiddleware = require("../../auth/middleware/authMiddleware");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", authMiddleware, addProduct);

module.exports = router;
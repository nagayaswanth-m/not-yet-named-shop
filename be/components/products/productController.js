const productService = require('./productService');

getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllProducts, getProductById, addProduct };
const Product = require("./productModel");

getAllProducts = async (req, res) => {
    const products = await Product.find({});
    return products;
};

getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    return product;
};

addProduct = async (req, res) => {
    const { name, description, price, category, stock, image } = req;
    const product = await Product.create({
        name,
        description,
        price,
        category,
        stock,
        image
    });
    return product;
}

module.exports = { getAllProducts, getProductById, addProduct };
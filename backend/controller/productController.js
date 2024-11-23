const Product = require('../models/Product');
const { createCsv } = require('../utils/exportCsv');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const { name, sku, category, description, price, quantity, threshold } = req.body;

    try {
        const newProduct = new Product({ name, sku, category, description, price, quantity, threshold });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing product by ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, sku, category, description, price, quantity, threshold } = req.body;

    try {
        // Find product by ID and update it
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, sku, category, description, price, quantity, threshold },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Export all products to CSV
const exportProductsCsv = async (req, res) => {
    try {
        const products = await Product.find();
        const csvPath = await createCsv(products);
        res.download(csvPath);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct, exportProductsCsv };

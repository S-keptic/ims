const express = require('express');
const {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    exportProductsCsv
} = require('../controller/productController.js');
const router = express.Router();

router.get('/', getProducts);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/export', exportProductsCsv);

module.exports = router;

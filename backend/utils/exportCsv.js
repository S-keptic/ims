const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

const createCsv = async (data) => {
    const path = './inventory.csv';

    const csvWriter = createObjectCsvWriter({
        path,
        header: [
            { id: 'name', title: 'Name' },
            { id: 'sku', title: 'SKU' },
            { id: 'category', title: 'Category' },
            { id: 'price', title: 'Price' },
            { id: 'quantity', title: 'Quantity' },
        ]
    });

    await csvWriter.writeRecords(data);
    return path;
};

module.exports = { createCsv };

const router = require('express').Router();
const Product = require('../../../models/products');


// create

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProducts = await newProduct.save()
        res.status(201).json(savedProducts)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router;
const router = require('express').Router();
const Product = require('../../../models/products');



// // get all products

router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            });
        } else {
            products = await Product.find()
        }
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




module.exports = router;
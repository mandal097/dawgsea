const router = require('express').Router();
const Product = require('../../../models/products');



// get a particular product
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})



module.exports = router;
const router = require('express').Router();
const Product = require('../../../models/products');


// update
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error })

    }
})

module.exports = router;
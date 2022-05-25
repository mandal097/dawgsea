const router = require('express').Router();
const Product = require('../../../models/products');

// delete
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'product has been deleted' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router;
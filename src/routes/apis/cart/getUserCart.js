const router = require('express').Router();
const Cart = require('../../../models/cart');

router.get('/', async (req, res) => {
    const { } = req.body;
    const userId = req.user.id;

    try {
        // const cart = await Cart.findOne({ userId })
        const cart = await Cart.findOne({ userId }).populate("products.productId", "_id title")
        res.status(200).json({
            status: 'success',
            cart: cart
        })

    } catch (error) {
        res.status(500).json({
            status: 'errro',
            error: error
        })
    }
})

module.exports = router;
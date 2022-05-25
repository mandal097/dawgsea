const router = require('express').Router();
const Cart = require('../../../models/cart');


router.delete('', async (req, res) => {
    const userId = req.user.id;
    try {
        await Cart.findOneAndDelete({ userId: userId })
        res.status(200).json({ message: 'Cart has been deleted' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


module.exports = router;
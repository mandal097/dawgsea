const router = require('express').Router();
const Cart = require('../../../models/cart');


router.put('/:id', async (req, res) => {
    const userId = req.user.id;
    try {
        const updatedCart = await Cart.findOneAndUpdate({
            "userId": userId, "products.productId": req.params.id
            // userId
        },
            {
                $pull: {
                    "products": { productId: req.params.id }
                }
            }
        );

        await updatedCart.save()
        res.status(200).json({
            status: 'success',
            cart: updatedCart
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error
        })
    }
})


module.exports = router;
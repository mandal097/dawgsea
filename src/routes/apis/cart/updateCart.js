const router = require('express').Router();
const Cart = require('../../../models/cart');


router.put('/:id', async (req, res) => {
    const userId = req.user.id;
    // const id = req.params.id
    console.log(userId);
    try {

        const updatedCart = await Cart.findOneAndUpdate({
            "userId": userId, "products.productId": req.params.id
        },
            {
                $set: {
                    "products.$.quantity": req.body.quantity
                }
            }
        )

        await updatedCart.save()
        res.status(200).json({
            status: 'success',
            msg: 'updated cart successfully',
            carts: updatedCart
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error
        })

    }
})


module.exports = router;

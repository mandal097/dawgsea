const router = require('express').Router();
const Cart = require('../../../models/cart');



// create

router.post('/', async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId, quantity } = req.body;
        const cart = await Cart.findOne({ userId: userId });
        if (cart) {
            const obj = {
                productId,
                quantity
            }
            await cart.updateOne({
                $push: { products: obj }
            })
            res.status(201).json({
                status: 'success',
                msg: 'updated cart successfully',
                cart: cart
            })
        } else {
            const newCart = new Cart({
                userId,
                products: [
                    {
                        productId,
                        quantity
                    }
                ]
            })
            await newCart.save();

            res.status(201).json({
                status: 'success',
                msg: 'created cart successfully',
                cart: newCart
            })

        }
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
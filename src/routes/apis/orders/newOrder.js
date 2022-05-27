const router = require('express').Router();
const Order = require('../../../models/order');
const User = require('../../../models/user')


router.post('', async (req, res) => {
    try {

        const {
            name,
            email,

            address,
            state,
            district,
            pinCode,
            phoneNo,

            // p_name,
            // price,
            // qunatity,
            // productId,
            orderItems,

            paymentId,
            paymentStatus,

            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,

        } = req.body;

        const order = new Order({
            userId: req.user.id,
            name,
            email,
            shippingInfo: {
                address,
                district,
                state,
                pinCode,
                phoneNo
            },
            // orderItems: [
            //     {
            //         // p_name,
            //         price,
            //         qunatity,
            //         productId,
            //     },
            // ],
            orderItems,
            paymentInfo: {
                paymentId,
                paymentStatus
            },
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
        });
        await order.save()
        res.status(201).json({
            status: 'success',
            msg: 'Order placed successfully',
            order: order
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
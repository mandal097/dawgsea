const router = require('express').Router();
const Order = require('../../../../models/order');

// get all Orders -users
router.get('', async (req, res) => {
    try {
        const order = await Order.find();
        res.status(201).json({
            status: 'success',
            msg: `All Orders fetched a`,
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
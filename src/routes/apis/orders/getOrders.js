const router = require('express').Router();
const Order = require('../../../models/order');
const User = require('../../../models/user')

// get single order -user
router.get('', async (req, res) => {
    try {
        const order = await Order.findOne({ id: req.params.id });
        res.status(201).json({
            status: 'success',
            msg: `Orders fetched`,
            order: order
        })

        if (!order) {
            res.status(404).json({
                status: 'err',
                msg: `Order not found with this Id`,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
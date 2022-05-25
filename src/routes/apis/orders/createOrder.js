const router = require('express').Router();
const Order = require('../../../models/order');
const User = require('../../../models/user')


router.post('/', async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId, quantity } = req.body;

        const order = new Order({
            
        })

        res.status(200).json({
            status: 'success',
            msg: 'order placed successfully',
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})
module.exports = router;
const router = require('express').Router();
const { auth } = require('../../../middlewares/auth')

const createOrder = require('./createOrder');


// http;//localhost:5000/api/order
router.use('/order', auth, createOrder)



module.exports = router;
const router = require('express').Router();
const { auth , authAdmin } = require('../../../middlewares/auth')

const newOrder = require('./newOrder');
const getOrders = require('./getOrders');
const getAllOrders = require('./getAllOrders');

const allOrders = require('./admin/allOrders');


// http;//localhost:5000/api/order/new
router.use('/order/new', auth, newOrder);


// http;//localhost:5000/api/order/:id
router.use('/order/:id', getOrders)

// http;//localhost:5000/api/order/all -logged in users
router.use('/orders/me' ,auth, getAllOrders)


// admin routes
// http://localhost:5000/admin/order  all orders
router.use('/admin/orders' , allOrders)



module.exports = router;
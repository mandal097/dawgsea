const router = require('express').Router();
const { auth } = require('../../../middlewares/auth')

const cart = require('./cart');
const updateCart = require('./updateCart');
const getUserCart = require('./getUserCart');
const deleteCartItem = require('./deletecartItem');
const deleteCart = require('./deleteCart');

// http"//localhost:5000/api/cart
router.use('/cart', auth, cart)

// http"//localhost:5000/api/get-cart
router.use('/get-cart', auth, getUserCart)


// http"//localhost:5000/api/update-cart/:id
router.use('/update-cart/', auth, updateCart)

// http"//localhost:5000/api/delete-cart/:id
router.use('/delete-cart/', auth, deleteCart)

// http"//localhost:5000/api/delete-cart/:id
router.use('/delete-cart-item/', auth, deleteCartItem)





module.exports = router;
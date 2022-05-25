const router = require('express').Router();

const userRoutes = require('./apis/user/routes')
const productsRoutes = require('./apis/products/routes')
const cartRoutes = require('./apis/cart/routes')
const orderRoutes = require('./apis/orders/routes')


router.use('/api', userRoutes);

router.use('/api', productsRoutes);

router.use('/api', cartRoutes);

router.use('/api', orderRoutes);


module.exports = router;
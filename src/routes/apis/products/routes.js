const router = require('express').Router();
const { auth, authAdmin } = require('../../../middlewares/auth')

const createProducts = require('./createProduct');
const updateProduct = require('./updateProducts');
const deleteproduct = require('./deleteProduct');
const getProduct = require('./getProduct');
const getAllProducts = require('./getAllProducts');


router.use('/products',  getAllProducts);

router.use('/products', getProduct);

// with only admin access
router.use('/products/create', auth, authAdmin, createProducts);

router.use('/products/update', auth, authAdmin, updateProduct);

router.use('/products/delete', auth, authAdmin, deleteproduct);





module.exports = router;
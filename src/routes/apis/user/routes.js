const router = require('express').Router();
const { auth, authAdmin } = require('../../../middlewares/auth')


const registration = require('./register')
const login = require('./login')
const getUser = require('./getUser')
const updateProfile = require('./updateProfile')
const deleteUser = require('./deleteUser')
const resetPassword = require('./resetPassword')
const forgotPassword = require('./forgotPassword')

const adminRegister = require('./admin/register')
const adminLogin = require('./admin/login')
const allUsers = require('./admin/allUser')

// admin

router.use('/user/admin', adminRegister)

router.use('/user/admin', adminLogin);

router.use('/user/admin', authAdmin, allUsers)

// users

router.use('/user', registration)

router.use('/user', login)

router.use('/user', forgotPassword)

router.use('/user', auth, getUser)

router.use('/user/update', auth, updateProfile)

router.use('/user/delete', auth, deleteUser)

router.use('/user/reset-password', auth, resetPassword)



module.exports = router;
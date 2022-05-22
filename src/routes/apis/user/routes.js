const router = require('express').Router();
const auth = require('../../../middlewares/auth')


const registration = require('./auth/register')
const login = require('./auth/login')
const getUser = require('./getUser')
const updateProfile = require('./auth/updateProfile')
const deleteUser = require('./auth/deleteUser')
const resetPassword = require('./auth/resetPassword')
const forgotPassword = require('./auth/forgotPassword')


router.use('/user', registration)

router.use('/user', login)


router.use('/user', forgotPassword)

router.use('/user', auth, getUser)

router.use('/user/update', auth, updateProfile)

router.use('/user/delete', auth, deleteUser)

router.use('/user/reset-password', auth, resetPassword)



module.exports = router;
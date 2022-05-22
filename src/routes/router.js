const router = require('express').Router();

const userRoutes = require('./apis/user/routes')

router.use('/api', userRoutes)


module.exports = router;
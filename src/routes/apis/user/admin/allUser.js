const router = require('express').Router();
const User = require('../../../../models/user');

router.get('/get-all-user', async (req, res) => {
    try {
        const allUser = await User.find()
        res.status(201).json({
            status: 'success',
            user: allUser
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
const router = require('express').Router();
const User = require('../../../models/user');

router.get('/get-user', async (req, res) => {
    const { id } = req.user;
    try {
        const userData = await User.findById(id)
        res.status(201).json({
            status: 'success',
            user: userData
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
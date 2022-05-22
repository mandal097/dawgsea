const router = require('express').Router();
const User = require('../../../models/user');
// searching parameteres

router.get('/search', async (req, res) => {
    const keyword = req.query.search ? {
        $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { email: { $regex: req.query.search, $options: 'i' } },
        ]
    } : {}

    const users = await (await User.find(keyword))
    // .find({ _id: { $ne: req.user._id } });
    res.status(200).json(users)
})


module.exports = router; 
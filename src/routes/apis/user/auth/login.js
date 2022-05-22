const router = require('express').Router();
const User = require('../../../../models/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../../../../helpers/genrateToken');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(404).json({
                status: 'err',
                msg: 'Please add all fields'
            })
        } else {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(404).json({
                    status: 'err',
                    msg: 'Invalid Credentials'
                })
            } else {
                const isMatched = await bcrypt.compare(password, user.password);
                if (!isMatched) {
                    res.status(404).json({
                        status: 'err',
                        msg: 'Invalid Credentials'
                    })
                } else {
                    const accessToken = generateToken({ id: user._id, email: email })
                    const obj = {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    res.status(201).json({
                        status: 'success',
                        msg: 'Successfully Logged In',
                        token: accessToken,
                        user: obj
                    })
                }
            }
        }
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
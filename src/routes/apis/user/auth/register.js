const router = require('express').Router();
const User = require('../../../../models/user');
const bcrypt = require('bcryptjs');

router.post('/registration', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            res.status(404).json({
                status: 'err',
                msg: 'Please add all fields'
            })
        } else {
            const user = await User.findOne({ email });
            if (!user) {
                const hashPassword = await bcrypt.hashSync(password, 10);
                const newUser = new User({
                    name,
                    email,
                    password: hashPassword
                })
                await newUser.save();
                res.status(201).json({
                    status: 'success',
                    msg: 'User added Successfully',
                    user: newUser
                })
            } else {
                res.status(404).json({
                    status: 'err',
                    msg: 'User already exists'
                })
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
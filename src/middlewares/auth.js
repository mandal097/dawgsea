const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {

        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {

            if (err) res.status(403).json({
                status: 'err',
                msg: 'Invalid Token!'
            });
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({
            status: 'err',
            msg: 'You must have to logged in'
        })
    }
}




const authAdmin = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.isAdmin === true) {
            next()
        } else {
            res.status(403).json('you are not allowed to do that')
        }
    })
}




// const authAdmin = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {

//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {

//             if (err) res.status(403).json({
//                 status: 'err',
//                 msg: 'Invalid Token!'
//             });
//             if (!req.user.isAdmin === true) {
//                 res.status(403).json({
//                     status: 'err',
//                     msg: 'admin Access only'
//                 });
//             }

//             next();
//         })
//     } else {
//         return res.status(401).json({
//             status: 'err',
//             msg: 'You must have to logged in'
//         })
//     }
// }




module.exports = { auth, authAdmin };



















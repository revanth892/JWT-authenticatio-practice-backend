
const jwt = require('jsonwebtoken')

const authmiddleware = (req,res,next)=>
{
    const { authorization } = req.headers;
    console.log(req.headers['authorization'])
    if (authorization) {
        const token = authorization.split(' ')[1];
        try {
            const decoded = jwt.verify(token, 'SECRETKEY');
            if (decoded) {
                const username = decoded.username;
                const persistedUser = users.find(item => item.username === username);
                if (persistedUser) {
                    req.username = persistedUser.username
                    next();
                } else {
                    res.json({ success: false, message: 'User does not exist!' });
                }
            } else {
                res.status(401).json({ success: false, message: 'Token verification failed!' });
            }
        } catch (error) {
            res.status(401).json({ success: false, message: 'Token verification fail' });
        }
    } else {
        res.status(401).json({ success: false, message: 'No authorization header found!' });
    }
}

module.exports={authmiddleware};
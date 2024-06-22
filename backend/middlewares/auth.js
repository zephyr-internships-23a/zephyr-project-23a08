const User = require('../Model/User');
const jwt = require('jsonwebtoken');

exports.isAuthenticated= async(req, res, next)=>{
    try {const {token} = req.cookies;
    if (!token) {
        return res.status(403).json({ message: 'Please Login first' });
    }
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);


    // if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    // }
    req.user = await User.findById(decoded.id);
    next();
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
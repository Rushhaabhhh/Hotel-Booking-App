const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.userId = decoded.userId;
        next();
    } catch (e) {
        res.send({
            success: false,
            message: 'Invalid token'
        })
    }
}

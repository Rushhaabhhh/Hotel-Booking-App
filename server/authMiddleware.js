const jwt = require('jsonwebtoken');
const User = require('./Models/UserModel');

const protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.jwt; 

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized - No Token Provided' });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        if (!decoded) {
            return res.status(401).json({ success: false, message: 'Unauthorized - Invalid Token' });
        }

        req.body.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Error in verifyToken middleware: ", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    protectRoute,
    verifyToken
};

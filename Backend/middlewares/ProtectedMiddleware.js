import jwt from 'jsonwebtoken';
import { User } from '../modals/user.model.js';

// & Protected Middleware
export const ProtectedMiddleware = async (req, res, next) => {
    try {
        const jwtToken = req.cookies.jwt;

        // check if jwt is present or not
        if (!jwtToken) {
            return res.status(401).json({
                error: "No token provided. Unauthorized.",
                success: false
            });
        }

        // Verify token
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

        // Token expired handling
        if (!decoded) {
            return res.status(401).json({ error: "Invalid token. Unauthorized" });
        }

        // Find the user inside the collection
        const userFind = await User.findById(decoded.userId).select('-password');
        if (!userFind) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = userFind;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired. Please log in again.' });
        }
        console.log("Error in Protected Middleware", error.message);
        return res.status(500).json({ error: "Internal server Error" });
    }
};


// export const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;

//         if (!token) {
//             return res.status(401).json({ message: "Unauthorized - No Token Provided" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         if (!decoded) {
//             return res.status(401).json({ message: "Unauthorized - Invalid Token" });
//         }

//         const user = await User.findById(decoded.userId).select("-password");

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         req.user = user;

//         next();
//     } catch (error) {
//         console.log("Error in protectRoute middleware: ", error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// & General Role-based Authentication Middleware
export const ProtectedMiddlewareteahcer = async (req, res, next) => {
    try {
        const jwtToken = req.cookies.jwt;

        // check if jwt is present or not
        if (!jwtToken) {
            return res.status(401).json({
                error: "No token provided. Unauthorized.",
                success: false
            });
        }

        // Verify token
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

        // Token expired handling
        if (!decoded) {
            return res.status(401).json({ error: "Invalid token. Unauthorized" });
        }

        // Find the user inside the collection
        const userFind = await User.findById(decoded.userId).select('-password');
        if (!userFind) {
            return res.status(404).json({ msg: "not authorized" });
        }
        if (userFind?.role !== 'teacher') {
            return res.status(404).json({ msg: "not authorized" });
        }

        req.user = userFind._id;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired. Please log in again.' });
        }
        console.log("Error in Protected Middleware", error, error.message);
        return res.status(500).json({ error: "Internal server Error" });
    }
};



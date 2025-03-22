import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { User } from "../modals/user.model.js";
import { sendPasswordResetEmail } from "../utils/emailSendingFunction.js";
import cloudinary from "../utils/cloudinary.js";
import AppError from "../utils/error.js";

// * POST API for registering the user
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Client-side validation
        if (!email || !name || !password) {
            return res.status(400).json({
                success: false,
                error: "All fields are required"
            });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                success: false,
                error: "Email already in use"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Register the new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error",
            success: false
        });
    }
};

// * POST API for logging in the user
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {

            throw new AppError("invalid credentials", 400)
        }

        // Find user by email
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            throw new AppError("invalid credentials", 400)

        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new AppError("invalid credentials", 400)
        }

        // Generate JWT token
        const payload = {
            userId: user._id,
            email: user.email,
            verified: user.verified
        };
        const userToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('jwt', userToken, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // MS
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite: "strict", // CSRF attacks cross-site request forgery attacks
            secure: process.env.NODE_ENV !== "development",
        })
        res.status(200).json({
            _id: user._id,
            fullName: user.name,
            email: user.email,
            profilePic: user.profilePic,
        });


    } catch (error) {
        next(error);
    }
};

// * update profile cloudinary image 
export const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;

        if (!profilePic) {
            return res.status(400).json({ message: "Profile pic is required" });
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: uploadResponse.secure_url },
            { new: true }
        ).select('_id profilePic name email verified');

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log("error in update profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// * POST API for logging out
export const logout = async (req, res) => {
    try {
        res
            .clearCookie('jwt')
            .status(200)
            .json({
                success: true,
                msg: "Successfully logged out"
            });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);

    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });

    }
};

// * POST API for forgot password (send reset link)
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: "Email not provided" });

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: "User doesn't exist" });

        // Generate a reset token
        const generateToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '300s' });
        user.forgotpasswordcode = generateToken;
        await user.save();

        // Send password reset email
        const emailSent = await sendPasswordResetEmail(user.name, user.email, generateToken);
        if (!emailSent) {
            return res.status(500).json({ error: "Failed to send reset email" });
        }

        return res.status(200).json({ message: "Password reset email sent successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

// * Verify user before resetting password
export const verifyUserbeforeResetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const validUser = await User.findOne({ forgotpasswordcode: token });

        // Verify the token
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (validUser && validUser._id.toString() === verifiedToken._id.toString()) {
            res.status(200).json({ status: 200, msg: "User verified" });
        } else {
            res.status(401).json({ status: 401, msg: "User doesn't exist or invalid token" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

// * Reset password
export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const { token } = req.query;

        if (!token || !password) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const tokenExist = await User.findOne({ forgotpasswordcode: token });
        if (!tokenExist) {
            return res.status(400).json({ error: "Token has expired or is invalid" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.findByIdAndUpdate(tokenExist._id, { $set: { password: hashedPassword, forgotpasswordcode: "" } }, { new: true }).select('-password');

        return res.status(201).json({ success: true, msg: "Password has been reset", data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};


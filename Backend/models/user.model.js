import mongoose from 'mongoose'

const Collection_Structure = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: [true, 'Email must be unique!'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password must be provided'],
        trim: true,
        select: false,

    },
    profilePic: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ['teacher', 'student'],
        default: "student"

    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationcode: {
        type: String,
        select: false,

    },
    verificationcodevalidation: {
        type: Number,
        select: false,

    },
    forgotpasswordcode: {
        type: String,
        select: false,
        default: ""
    },
    forgotpasswordcodevalidation: {
        type: Number,
        select: false
    }
}, { timestamps: true })

// creating the collection of based on the structure 
export const User = mongoose.model("Userdetails", Collection_Structure)


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZ2FyQGdtYWlsLmNvbSIsImlhdCI6MTczMjE4NjAwMSwiZXhwIjoxNzMyMjcyNDAxfQ.FE8xuaddT-os8Sea1tv2sZxeHuCPeqqp3t526xljAx4
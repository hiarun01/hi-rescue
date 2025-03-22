import nodemailer from 'nodemailer'

export const sendPasswordResetEmail = async (name, email, token) => {
    try {
        // Create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this to your email service provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address (from which the email will be sent)
                pass: process.env.EMAIL_PASSWORD // Your email password (or app-specific password if 2FA is enabled)
            }
        });

        // Email content
        const resetLink = `http://localhost:5173/reset-password/:${token}`;  // sending the token in url parameter 

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender's email address
            to: email, // Recipient's email address
            subject: "Password Reset Request",
            html: `
                <p>Hi ${name},</p>
                <p>We received a request to reset your password. Please click the link below to reset it:</p>
                <p><a href="${resetLink}">Reset Password</a></p>
                <p>If you didn't request this, please ignore this email.</p>
                <p>Thanks,</p>
                <p>Your Company Name</p>
            `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log("Password reset email sent: ", info.response);
        return true; // Indicate email was sent successfully
    } catch (error) {
        console.error("Error sending email:", error);
        return false; // Indicate an error occurred
    }
};


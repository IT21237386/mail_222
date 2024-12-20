import express from 'express';
import nodemailer from 'nodemailer';
import 'dotenv/config'


const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or use another service like Outlook, Yahoo, etc.
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.PASSWORD
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to,
        subject,
        text: message,
    };

    // // Handle attachment if it exists
    // if (attachment) {
    //     mailOptions.attachments = [{ path: attachment }]; // Adjust this as needed for file paths
    // }


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ success: false, message: 'Failed to send email' });
        console.log(error);
    }
});
export default router;
// module.exports = router;

// const express = require('express');
import express from 'express';
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or use another service like Outlook, Yahoo, etc.
        auth: {
            user: 'kavindasithum127@gmail.com', // Replace with your email
            pass: 'vctv xlau neun iere', // Replace with your email password or app password
        },
    });

    // Email options
    const mailOptions = {
        from: 'kavindasithum127@gmail.com',
        to,
        subject,
        text: message,
    };

    // Handle attachment if it exists
    if (attachment) {
        mailOptions.attachments = [{ path: attachment }]; // Adjust this as needed for file paths
    }


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
